一般在启动时主线程耗时超过20秒（如20.9秒、21秒），watchDog就会把应用杀掉，可用如下代码测试。
常见的触发 watchdog 超时的场景就是主线程的耗时任务过久，或者出现的数据竞争线程等待的问题（如dispatch_semaphore_wait的一些场景）


```objc
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // sleep(21);
    [NSThread sleepForTimeInterval:20.9];
    return YES;
}
```

笔者测相应场景导出的 ips 日志

```objc
     Exception Type:  EXC_CRASH (SIGKILL)
     Exception Codes: 0x0000000000000000, 0x0000000000000000
     Termination Reason: FRONTBOARD 2343432205
     <RBSTerminateContext| domain:10 code:0x8BADF00D explanation:scene-create watchdog transgression: app<com.baidu.TBDebugClient(F677A907-A383-4644-A57B-FE090F814517)>:2286 exhausted real (wall clock) time allowance of 19.93 seconds
     ProcessVisibility: Foreground
     ProcessState: Running
     WatchdogEvent: scene-create
     WatchdogVisibility: Foreground
     WatchdogCPUStatistics: (
     "Elapsed total CPU time (seconds): 3.330 (user 3.330, system 0.000), 3% CPU",
     "Elapsed application CPU time (seconds): 0.006, 0% CPU"
     ) reportType:CrashLog maxTerminationResistance:Interactive>

     Triggered by Thread:  0

     Thread 0 name:   Dispatch queue: com.apple.main-thread
     Thread 0 Crashed:
     0   libsystem_kernel.dylib                   0x1dc38c9d8 __semwait_signal + 8
     1   libsystem_c.dylib                        0x19ce89f20 nanosleep + 220
     2   libsystem_c.dylib                        0x19ce981dc sleep + 52
     3   Demo                                     0x100a7ee5c -[AppDelegate application:didFinishLaunchingWithOptions:] + 84
     4   UIKitCore                                0x1972b50e0 -[UIApplication _handleDelegateCallbacksWithOptions:isSuspended:restoreState:] + 320
     5   UIKitCore                                0x1972b4248 -[UIApplication _callInitializationDelegatesWithActions:forCanvas:payload:fromOriginatingProcess:] + 2856
     6   UIKitCore                                0x1972b322c -[UIApplication _runWithMainScene:transitionContext:completion:] + 856
     7   UIKitCore                                0x1972b2ea4 -[_UISceneLifecycleMultiplexer completeApplicationLaunchWithFBSScene:transitionContext:] + 176
     8   UIKitCore                                0x1972b2dd4 -[UIApplication _compellApplicationLaunchToCompleteUnconditionally] + 48
     9   UIKitCore                                0x1972d0290 -[UIApplication _run] + 852
     10  UIKitCore                                0x1972cf8f0 UIApplicationMain + 340
     11  Demo                                     0x100a7f914 main + 120
     12  dyld                                     0x1b7906dcc start + 2240v
```



注：测试相应触发场景不能使用连接 Xcode 运行项目，而是要直接打开手机上已安装的测试应用。

详情见：[Why does my application crash during launch unless I run it from Xcode?](https://developer.apple.com/library/archive/qa/qa1592/_index.html)

> When Xcode launches an application, the watchdog timer is disabled to compensate for additional overhead that may be incurred when Xcode attaches the debugger. As a result, your application's long startup may initially escape your attention if you are exclusively testing by running from Xcode.
>
> The best applications launch quickly, allowing the user to interact with the application as soon as possible. To provide a quality user experience, you should routinely evaluate and work to improve the launch time of your application. If considerable work must be done at launch, consider performing that work on a secondary thread and visually indicating the activity.
