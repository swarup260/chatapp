const Router = require('@koa/router')
const router = new Router({
    prefix: '/users'
})

const UserController = require('../controller/users.controller')

/* routes */
router
    .post('/login', UserController.login)
    .post('/register', UserController.register)


module.exports = router