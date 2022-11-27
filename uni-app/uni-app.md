- [uni-app](https://www.dcloud.io/)

## 网络
针对网络接口调用
- 需考虑超时时间
- 需有重试
- 需考虑取消或终止接口任务（如出错、超时或页面销毁等）
- 须有异常捕获且捕获后不能吞掉异常，要把异常信息提示或其他处理
## 组件
## Swiper

- https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/component/view-container/swiper
- https://uniapp.dcloud.net.cn/component/swiper.html#swiper
- https://github.com/dcloudio/uni-ui
- [uni-app swiper数量过多时卡顿优化方案](https://blog.csdn.net/weixin_38946164/article/details/122967037)


## 资源文件
### 字体
- 今天从同事那里学到一个使用非系统字体时影响包体积的处理思路，可以通过预判程序中可能出现的文字，下发含相应文字的字体，够用就好，这样可以减小引入全字体导致的包体积增大的问题。