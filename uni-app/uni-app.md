- [uni-app](https://www.dcloud.io/)

## 网络
针对网络接口调用
- 需考虑超时时间
- 需有重试
- 需考虑取消或终止接口任务（如出错、超时或页面销毁等）
- 须有异常捕获且捕获后不能吞掉异常，要把异常信息提示或其他处理

## 音视频
以视频为例，一般情况下，创建 videoContext 并 play 较为合适的地方在 onReady 方法中。页面消失时或者页面未显示时，需要注意把相应的 videoContext 触发 pause 或有需要的话触发 stop。有时页面消失时触发 pause 方法可能未生效，这种情况下，可在播放会触发到的 @play 和 @timeupdate 相应的方法回调中，再次触发 pause 或 stop。
- 如果在程序进入后台前，选择在页面 hide 前做事情未成功处理，可尝试在 appHide 触发时尝试处理事情。
## 组件

### 事件处理
- 以 button 组件的事件方法为例，是可以操作事件冒泡，捕获相关的方法的
- 如果想要手动触发按钮的点击，可以尝试获取到对应元素，然后再触发相应 click 方法（这种方式待验证）
## Swiper

- https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/component/view-container/swiper
- https://uniapp.dcloud.net.cn/component/swiper.html#swiper
- https://github.com/dcloudio/uni-ui
- [uni-app swiper数量过多时卡顿优化方案](https://blog.csdn.net/weixin_38946164/article/details/122967037)


## 资源文件
### 字体
- 今天从同事那里学到一个使用非系统字体时影响包体积的处理思路，可以通过预判程序中可能出现的文字，下发含相应文字的字体，够用就好，这样可以减小引入全字体导致的包体积增大的问题。