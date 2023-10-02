#### GitHub 连接超时问题

##### 查看 GitHub 相关域名 IP 地址

在终端查看 github.com 相关域名对应的 IP

> ping github.com   
>
> PING github.com (20.205.243.166): 56 data bytes



> ping github.global.ssl.fastly.net
>
> PING github.global.ssl.fastly.net (199.59.148.15): 56 data bytes



##### 在 host 文件中指定域名和IP映射

> 20.205.243.166 github.com
>
> 199.59.148.15 github.global.ssl.fastly.net



##### 参考学习网址

- https://blog.csdn.net/Thanksgining/article/details/104383480
