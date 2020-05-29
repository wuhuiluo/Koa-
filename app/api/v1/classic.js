const Router = require('koa-router')
const router = new Router()


router.post('/v1/:id/classic/latest', (ctx, next) => {
    // 取路径里的参数 :id
    const path = ctx.params // id
    console.log(path)
    const query = ctx.request.query // 问号(?)后面的查询参数 
    console.log(query)
    const headers = ctx.request.header // 获取header
    console.log(headers)
    const body = ctx.request.body // 获取body中的数据
    console.log(body)
    ctx.body = {
        name: "Classic"
    }
})

module.exports = router
// module.exports = {
//     router
// }