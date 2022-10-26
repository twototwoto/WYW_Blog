# Node

## # 跨域问题
```json
Access to XMLHttpRequest at 'http://localhost:8080/business?page=1&pageSize=10' from origin 'http://localhost:3000' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Credentials' header in the response is '' which must be 'true' when the request's credentials mode is 'include'. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.
```

##### 解决方式
```js
response.writeHead(200, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': 'http://localhost:3000',
		'Access-Control-Allow-Credentials': true,
	})
  ```
  
## # debug 启动失败问题

### 前言

如果我们需要使用 node 本地服务，为了改动本地接口后，为了可以快速刷新，尽可能不使用 node xxx.js 的方式运行（因为修改后，可能需要kill pid 再重新启动），会使用 debug 的方式，debug 本地 js 文件时可能遇到 debug 启动失败问题。

### debug 启动失败问题详情

> mac Can't find Node.js binary "node": path does not exist. Make sure Node.js is installed and in your PATH, or set the "runtimeExecutable" in your launch.json

### 解决方式

在 launch.json 中配置 node 执行路径

>  "runtimeExecutable": "/usr/local/bin/node"

### 参考学习网址

- [mac Can't find Node.js binary "node": path does not exist. Make sure Node.js is installed and in your PATH, or set the "runtimeExecutable" in your launch.json” ](https://www.codegrepper.com/code-examples/javascript/mac+Can%27t+find+Node.js+binary+%22node%22%3A+path+does+not+exist.+Make+sure+Node.js+is+installed+and+in+your+PATH%2C+or+set+the+%22runtimeExecutable%22+in+your+launch.json)
- [Can't find Node.js binary "node" using nvm](https://github.com/microsoft/vscode-js-debug/issues/1150)
