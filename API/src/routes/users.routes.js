const Router = require('@koa/router')
const router = new Router({
    prefix: '/users'
})

const JWT = require('../middleware/JWT')
const knex = require('../config/db')
/* initialize the users controller with proper dependencies */

const UserHandler = require("../handlers/users.handler")
const UserService = require("../services/users.service")
const UsersRepository = require("../repositories/users.repository")
const UserDoa = require("../doa/users.doa")

const userHandler = new UserHandler({
    userService: new UserService({
        usersRepository: new UsersRepository({
            userDoa: new UserDoa(knex)
        })
    })
})


/* routes */
router
    .post('/login', async (ctx) => (ctx.body = await userHandler.login(ctx.request.body)))
    .post('/register', async (ctx) => (ctx.body = await userHandler.register(ctx.request.body) ))
    .get('/', JWT, async (ctx) => (ctx.body = await userHandler.fetchDetail(ctx)))


module.exports = router