const Koa = require('koa');
const koaStatic = require('koa-static');
const koaMount = require('koa-mount');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const k2c = require('koa2-connect');

const resolve = file => path.resolve(__dirname, file);
const port = process.env.PORT || 8080;

const jsonp = require('koa-jsonp');
var cors= require('koa2-cors');

const app = new Koa();
app.use(cors());

// app.use(jsonp());
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin','*')
  ctx.set('Access-Control-Allow-Headers','Content-Type,Content-Length,Authorization,Accept,X-Requested-With')
  ctx.set('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS')
  ctx.body = 200;

  const url = ctx.path;
  if (url.startsWith('/api')) {
    ctx.respond = false;
    await k2c(
      createProxyMiddleware({
        target: '要中转的目标文件路径',
        changeOrigin: true,
        secure: false,
      }),
    )(ctx, next);
    return await next();
  }
  return await next();
});
// 开放目录
app.use(koaMount('/', koaStatic(resolve('../dist'))));

app.listen(port, () => {
  console.log(` Your application is running here: http://localhost:${port}`);
});
