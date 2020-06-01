const Router = require('koa-router')
const { User } = require('../../models/user')
const { RegisterValidator } = require('../../validators/validator')
const router = new Router({
    prefix: '/v1/user'
})

// 注册
router.post('/register', async (ctx, next) => {
    // 思维路径
    // 接收参数 LinValidator
    // email password1 password2 nickname
    const v = await new RegisterValidator().validate(ctx)
    const user = {
        email: v.get('body.email'),
        password: v.get('body.password1'),
        nickname: v.get('body.nickname')
    }
    User.create(user)
})

module.exports = router