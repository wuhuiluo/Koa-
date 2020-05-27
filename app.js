const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

// 好的代码 利于阅读 利于维护 提高编程效率
router.get('/classic/latest',async (ctx,next) => {
     ctx.body = {
        name: 'whl'
    }
})

app.use(router.routes())
// app.use(async (ctx, next) => {
//     if(ctx.path === '/' && ctx.method === 'GET') {
//         ctx.body = {
//             key: 123
//         }
//     }
// })
app.listen(3000)