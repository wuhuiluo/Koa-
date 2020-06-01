const Koa = require('koa')
const InitManager = require('./core/init')
const parser = require('koa-bodyparser')
const catchError = require('./middlewares/exception') // 全局异常处理函数 监听到任意异常

const app = new Koa()
app.use(catchError) //注册中间件
app.use(parser()) //调用 返回中间件
InitManager.initCore(app) // 由app.js传入到core
// console.log(process.cwd())
// requireDirectory(module, './app/api', {
//     visit: whenLoadMudule
// })

// function whenLoadMudule(obj) {
//     if (obj instanceof Router) {
//         app.use(obj.routes())
//     }
// }

// console.log(modules)

app.listen(3000)