## # 本地运行前端项目

### 安装

```js
sudo npm i http-server -g
```

### 查看帮助

```js
http-server -h
```

### 运行项目

```js
 http-server . -c-1 
```

运行结果示例

```js
➜  Project git:(feature/xxx) ✗ http-server . -c-1  
Starting up http-server, serving .

http-server version: 14.1.1

http-server settings: 
CORS: disabled
Cache: -1 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://127.0.0.1:8081
  http://192.168.50.89:8081
Hit CTRL-C to stop the server
```

在浏览器打开 http://127.0.0.1:8081 即可在本地查看项目运行效果

### 终止项目

```js
CTRL-C
```



- [前端在本地启动服务预览html页面](https://www.cnblogs.com/lxn2/p/10006222.html)
- [使用http-server零配置在本地开启http服务器](https://blog.csdn.net/qq_30100043/article/details/73105362)

