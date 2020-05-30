// 全局异常处理理解

function func1() {
    func2()
}

async function func2() {
    try {
        await func3()
    } catch (error) {
        console.log("error")
    }
}
//前提提交函数返回的是一个Promise才能加上 异步操作务必加上: async await 和 try catch处理
// 全局异常处理
// await 对一个表达式求值
function func3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const r = Math.random()
            if(r < 0.5) {
                reject('error happen')
            } else {
                resolve()
            }
        })
    })
    // await setTimeout(() => {
    //     throw new Error('error')
    // }, 1000)
}
func1()