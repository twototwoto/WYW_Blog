#### SocketRocket （低于0.7.0版本）存在线程优先级反转问题

##### 1、问题描述

在运行项目时，点击紫色感叹号，可看到如下警告信息。

SocketRocket/Internal/RunLoop/SRRunLoopThread.m:79 Thread running at QOS_CLASS_USER_INTERACTIVE waiting on a lower QoS thread running at QOS_CLASS_DEFAULT. Investigate ways to avoid priority inversions

##### 2、解决办法

升级 SocketRocket 版本至 0.7.0。

##### 相关网址

- [iOS16.0 线程警告提示 #650](https://github.com/facebookincubator/SocketRocket/issues/650)
- [Fix Thread Performance Checker warning in Xcode 14 #651](https://github.com/facebookincubator/SocketRocket/pull/651)
- [修改详情](https://github.com/tomsksoft/SocketRocket/commit/ad11aac2b7427aa0bdd4444c03a52cd0ababba81)
- [相关问题](https://github.com/facebookincubator/SocketRocket/issues?q=QOS_CLASS_USER_INTERACTIVE+)

##### 修改前

```objc
+ (instancetype)sharedThread {
    static SRRunLoopThread *thread;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        thread = [[SRRunLoopThread alloc] init];
        thread.name = @"com.facebook.SocketRocket.NetworkThread";
        [thread start];
    });
    return thread;
}
```

##### 修改后


```objc
+ (instancetype)sharedThread {
	  static SRRunLoopThread *thread;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        thread = [[SRRunLoopThread alloc] init];
	      // 主要是下边一行代码调整了线程的服务质量
        thread.qualityOfService = NSQualityOfServiceUserInitiated;
      
        thread.name = @"com.facebook.SocketRocket.NetworkThread";
        [thread start];
    });
    return thread;
}
```

#### 原因

如果不设置线程的服务级别，可能引起优先级反转问题。

举个例子的代码表现为 服务质量为 NSQualityOfServiceUserInteractive 级别的线程（如主线程）在获取 `[SRRunLoopThread sharedThread]` 所在的 `[SRRunLoopThread sharedThread].runLoop;` 时，受到线程A的服务质量级别为NSQualityOfServiceUserInitiated 的影响出现优先级反转的问题。

在未改变`[SRRunLoopThread sharedThread]`的服务级别前，`[SRRunLoopThread sharedThread]`可能受到相应时间段内服务质量高于`[SRRunLoopThread sharedThread]`服务质量的线程（比如线程A，线程A的服务质量级别为NSQualityOfServiceUserInitiated）抢占资源的问题。

整个场景综合来说，本来主线程的执行时机要早于线程A，但是主线程要获取 `[SRRunLoopThread sharedThread].runLoop;` 假如这时线程A上有了新的任务，线程A的服务质量高于`[SRRunLoopThread sharedThread]`，因此线程A上的任务就要先执行，因此主线程的执行受到到了阻塞，这导致线程A上的任务就比主线程优先调用了，这就是一种优先级反转的问题。

**使用表现为**：界面可能在相应时间内无法交互或其他未知问题。

**修改方式解读**：如果我们更改了`[SRRunLoopThread sharedThread]`的服务质量为 NSQualityOfServiceUserInitiated，`[SRRunLoopThread sharedThread]`就不会再收到服务质量小于等于 NSQualityOfServiceUserInitiated 的线程的影响，问题也就解决了。



