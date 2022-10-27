
## Less

##### js

```less
.remMixin() {
    @functions: ~`(function() {
            function convert(size) {
                return size;
            }

            this.rem=function(size) {
                return convert(size) / 16 + 'rem';
            }
        })()`;
}

.remMixin();
```



##### 在 css 中使用 js

```less
.title {
        position: absolute;
        width: ~`rem(560) `;
        height: ~`rem(210) `;
        left: ~`rem(223) `;
        top: ~`rem(317) `;
        font-style: normal;
        font-weight: 600;
        font-size: ~`rem(140) `;
        line-height: ~`rem(210) `;
        color: #FFF;
    }

```

##### 出现问题

less 中添加 js 后报错：“Inline JavaScript is not enabled. Is it set in your options?”

##### 解决方法

修改 config-overrides.js 使 less 支持使用 js

```js
module.exports = {
  webpack: override(
    addLessLoader({
      lessLoaderOptions: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    }),
```



##### 参考学习文档

- [Less 文档](https://lesscss.com.cn/features/#features-overview-feature)
- [Less编写函数(mixin/@functions)的小技巧分享](https://juejin.cn/post/6844903841251459080)
- [less语法 + rem适配布局](https://blog.csdn.net/weixin_43845137/article/details/104791397)
- [stylelint 接入实战踩坑总结](https://juejin.cn/post/7026998283155275807#heading-5)
- [less的一些基础用法](https://blog.csdn.net/weixiwo/article/details/108703987)
- [Less的简单使用](https://blog.csdn.net/ckk727/article/details/106918675)



### 其他可能出现样式问题

可能 lint 格式出现问题，笔者暂时未启动 pre-commit 了 ，并尝试了打包，发现不影响打包。
其他的方式，可能有移除文件或者是忽略其他的文件。

- [【工具】提交代码前的代码检查pre-commit](https://blog.csdn.net/a5534789/article/details/84754572)
- [git commit 提交的时候报错husky > pre-commit hook failed (add --no-verify to bypass)（解决办法）](https://www.jianshu.com/p/7c6a05861b44)


