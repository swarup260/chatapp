const joi = require('joi')
const { generateToken , encrpytPassword } = require('../util/function')
const ValidationError = require('../error/ValidationError')

module.exports =  class UserController {

    /**
     * 
     * @param {Object} param0 
     * @param {import("../model/user.model")} param0.userModel
     */
    constructor({ userModel }) {
        this.userModel = userModel
    }

    async login(ctx) {
        try {
            const requestBody = ctx.request.body

            /* joi string validation */
            const schema = joi.object({
                username: joi.string().min(5).required(),
                password: joi.string().min(5).required()
            })
            /* validation request  */
            await schema.validateAsync(requestBody)

            const { username,password } = requestBody

            /* user validation */
            /* password validation */
            
            /* jwt token generation */
            ctx.body = { status: true, message: 'success', token: await generateToken({ username }) }
        } catch (error) {
            ctx.body = { status: false, message: error.message }
        }
    }

    async register(ctx) {
        try {

            const requestBody = ctx.request.body

            /* joi string validation */
            const schema = joi.object({
                username: joi.string().min(5).required(),
                email: joi.string().required().email(),
                password: joi.string().min(6).max(20).required(),
                repassword: joi.string().required()
            })

            const { username,password,repassword,email } = requestBody

            if (password != repassword) {
                throw new ValidationError(requestBody,"password mismatch")
            }

            /* validation request  */
            await schema.validateAsync(requestBody)
            
            /* hash password */
            const passwordHash = await encrpytPassword(password)

            /* save the user */
            this.userModel.save({
                username,
                email,
                password:passwordHash,
            })


            /* jwt token generation */
            ctx.body = { status: true, message: 'success', token: await generateToken({ username }) }
        } catch (error) {
            ctx.body = { status: false, message: error.message }
        }
    }

    async fetchDetail(ctx){
        try {
            
        } catch (error) {
            
        }
    }

}
