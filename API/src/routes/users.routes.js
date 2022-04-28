const Router = require('@koa/router')
const router = new Router({
    prefix: '/users'
})

const UserModel = require('../model/user.model')
const UserController = require('../controller/users.controller')
const JWT = require('../middleware/JWT')
const knex = require('knex')
/* initialize the users controller with proper dependencies */
const dbInstance = knex('users')
const userModel = new UserModel({ dbInstance })
const controller = new UserController({ userModel })


/* routes */
router
    .post('/login', controller.login)
    .post('/register', controller.register)
    .get('/',JWT,controller.fetchDetail)


module.exports = router