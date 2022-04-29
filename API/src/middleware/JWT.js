const ApplicationError = require("../error/ApplicationError")
const { verifyTokenPayload, errorResponseBody } = require('../util/function')
const UserService = require("../services/users.service")
const UsersRepository = require("../repositories/users.repository")
const UserDoa = require("../doa/users.doa")
const knex = require('../config/db')

const userService = new UserService({
    usersRepository: new UsersRepository({
        userDoa: new UserDoa(knex)
    })
})



module.exports = async (ctx, next) => {

    try {
        const [_, token] = await ctx.headers.authorization.split(" ")
        const decoded = await verifyTokenPayload(token)
        ctx.userPayload = await userService.verifyUser(decoded)
        /* check payload */
        return next()
    } catch (error) {
        return ctx.body = errorResponseBody(error)
    }
}