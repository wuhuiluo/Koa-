const { HttpException } = require('../core/http-exception')
const catchError = async (ctx, next) => {
    try {
        await next() // 监听异常的处理 否则会出现unhandled 
    } catch (error) {
        // 开发环境
        // 生产环境
        if(global.config.environment === 'dev') {
            throw error
        }
        // error 堆栈调用信息
        // error 简化 清晰明了的信息 给前端
        // HTTP Status Code 2xx 4xx 5xx
        if(error instanceof HttpException) {
            ctx.body = {
                msg: error.msg,
                error_code: error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code
        } else {
            ctx.body = {
                msg: 'we made a mistake',
                error_code: 999,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = 500
        }
        // message
        // error_code 详细，开发者自己定义 10001
        // request_url 当前请求的url
    }
}

module.exports = catchError