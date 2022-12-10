const Koa = require('koa');
const koaStatic = require('koa-static');
const koaMount = require('koa-mount');
const path = require('path');

const Router = require('koa-router');
const router = new Router();

const resolve = file => path.resolve(__dirname, file);
const port = process.env.PORT || 8080;

const jsonp = require('koa-jsonp');
var cors= require('koa2-cors');

const app = new Koa();
app.use(cors());

app.use(
  cors({
    origin: function(ctx) {
      // 只有域名在localhost:5173下的请求才能被获得
      return 'http://localhost:5173';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 1000,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
  })
);

app.use(router.routes(), router.allowedMethods());
app.use(jsonp());

router.get('/api/admin/report/buz/chart', async ctx => {
  ctx.body = [
		{
			id: '1001',
			name: '名字',
		}
	]
});

// 开放目录
app.use(koaMount('/', koaStatic(resolve('../dist'))));

app.listen(port, () => {
  console.log(` Your application is running here: http://localhost:${port}`);
});


/**
## 参考学习网址
- https://blog.csdn.net/weixin_40629244/article/details/102061187
- https://blog.csdn.net/qq_24724109/article/details/103499643
 */