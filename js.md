- [js this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)
- [Unhandled promise rejection --解决办法](https://blog.csdn.net/ICANDOD/article/details/81081292)

- [循环与迭代](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration)
- 看下for of 和 for in 区别
- [Array.prototype.map()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- 可批量对数组元素做修改，然后返回修改后的数组


#### JS 取消请求

- [如何取消HTTP请求](https://zhuanlan.zhihu.com/p/462874421)
- [JavaScript 中如何取消请求](https://juejin.cn/post/7111237605793988638)


#### 

```js

/** 当前时间字符串 * */
const timestampString = function() {
	try {
		const year = new Date().getFullYear();
		const month = new Date().getMonth() + 1;
		const day = new Date().getDate();
		const hour = new Date().getHours();
		const minutes = new Date().getMinutes();
		const seconds = new Date().getSeconds();
		// 如需两位0格式化，可判断大小或'0'+目标字符串然后slice(-2)
		return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
	} catch (error) {
		console.log('helper-timestampString- error:>> ', error);
		return '';
	}
}
```

##### JS 接口重试
- [NodeJS实现Retry重试策略和回退尝试](https://www.jianshu.com/p/bbc0fdb9ab1f)
- [Node.js方法错误自动重试的实现](https://blog.csdn.net/github_38589282/article/details/77414358)
- [实现一个支持请求失败后重试的JS方法](https://blog.csdn.net/wangliuqi123/article/details/124694153)
- [js实现接口请求重试](https://blog.csdn.net/SongZhengxing_/article/details/128074175)



##### JS 事件冒泡和事件捕获

- [终于弄懂了事件冒泡和事件捕获！](https://blog.csdn.net/chenjuan1993/article/details/81347590)
- [JS之事件捕获和事件冒泡](https://blog.csdn.net/m0_37937502/article/details/82830992)