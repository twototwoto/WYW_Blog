- [js this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)
- [Unhandled promise rejection --解决办法](https://blog.csdn.net/ICANDOD/article/details/81081292)

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