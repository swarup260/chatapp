const ApplicationError = require("../error/ApplicationError")
const jwt = require('jsonwebtoken')
const { verifyTokenPayload } = require('../util/function')

module.exports = async (ctx, next) => {

    try {
        const [_, token] = await ctx.headers.authorization.split(" ")
        const decoded = jwt.verify(token)
        ctx.userPayload = await verifyTokenPayload(decoded)
        /* check payload */
        await next()
    } catch (error) {
        throw new ApplicationError("Unauthorised Access")
    }
}