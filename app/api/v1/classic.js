const Router = require('koa-router')
const router = new Router()
const { HttpException, ParameterException } = require('../../../core/http-exception')
const { PositiveIntegerValidator } = require('../../validators/validator')
router.post('/v1/:id/classic/latest',async (ctx, next) => {
    // 取路径里的参数 :id
    const path = ctx.params // id
    // console.log(path)
    const query = ctx.request.query // 问号(?)后面的查询参数 
    // console.log(query)
    const headers = ctx.request.header // 获取header
    // console.log(headers)
    const body = ctx.request.body // 获取body中的数据
    // console.log(body)
    const v = await new PositiveIntegerValidator().validate(ctx)
    // if(true) {
    //    // 动态
    // //    const error = new HttpException('服务器垃裤了',10001,400)
    //       const error = new ParameterException()
    // //    error.errorCode = 10001
    // //    error.status = 400
    // //    error.requestUrl = `${ctx.method} ${ctx.path}`
    //    throw error
    // }

    ctx.body = {
        name: "Classic"
    }
    //KOA 中间件
    //监听错误
    //输出一段有意义的提示信息
})

module.exports = router
// module.exports = {
//     router
// }