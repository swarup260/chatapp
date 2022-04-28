const UserModel = require('../model/user.model')
const joi = require('joi')

class UserController {

    constructor({ userModel }) {
        this.userModel = userModel
    }

    login(ctx) {
        try {

            const schema = joi.object({
                
            })


            const { username , email  } = ctx.request.body
        
            if (joi.) {
                
            }


            ctx.body = ctx.request.body
        } catch (error) {
            ctx.body = { status: false, message: error.message }
        }
    }

    register(ctx) {
        try {
            ctx.body = ctx.request.body
        } catch (error) {
            ctx.body = { status: false, message: error.message }
        }
    }

}
const dbInstance = {}
const userModel = new UserModel({ dbInstance })
module.exports = new UserController({ userModel })