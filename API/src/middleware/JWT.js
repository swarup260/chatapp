const ApplicationError = require("../error/ApplicationError")
const jwt = require('jsonwebtoken')
const { verifyTokenPayload } = require('../util/function')

module.exports = async (ctx, next) => {

    try {
        const [_, token] = await ctx.headers.authorization.split(" ")
        const decoded = await verifyTokenPayload(token)
        const payload =await verifyUser(decoded)
        ctx.userPayload = payload
        /* check payload */
        await next()
    } catch (error) {
        throw new ApplicationError("Unauthorised Access")
    }
}