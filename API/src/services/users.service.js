const ValidationError = require("../error/ValidationError")
const { verifyPassword, encrpytPassword, generateToken } = require("../util/function")
const joi = require('joi')

module.exports = class UserService {
    /**
     * 
     * @param {Object} param0 
     * @param {import("../repositories/users.repository")} param0.usersRepository
     */
    constructor({ usersRepository }) {
        this.usersRepository = usersRepository
    }


    async login(requestObject) {
        try {
            /* joi string validation */
            const schema = joi.object({
                email: joi.string().email(),
                password: joi.string().min(5).required()
            })
            /* validation request  */
            await schema.validateAsync(requestObject)

            const { email, password } = requestObject

            /* user validation */
            const user = await this.usersRepository.get({ email })
            if (user === undefined) {
                throw new ValidationError(requestObject, "User Doesn't Exists !")
            }
            /* password validation */
            if (!verifyPassword(password, user.password)) {
                throw new ValidationError(requestObject, "Password Mismatch!")
            }

            if (!user.status) {
                throw new ValidationError(requestObject, "User InActive!")
            }

            /* jwt token generation */
            return { token: await generateToken({ username: user.username, id: user.id }) }

        } catch (error) {
            throw error
        }
    }

    async register(requestObject) {
        try {
            /* joi string validation */
            const schema = joi.object({
                username: joi.string().min(5).required(),
                email: joi.string().required().email(),
                password: joi.string().min(6).max(20).required(),
                repassword: joi.string().required()
            })

            const { username, password, repassword, email } = requestObject

            if (password != repassword) {
                throw new ValidationError(requestObject, "password mismatch")
            }

            /* validation request  */
            await schema.validateAsync(requestObject)

            /* hash password */
            const passwordHash = await encrpytPassword(password)

            /* save the user */
            const { id } = await this.usersRepository.save({
                username,
                email,
                password: passwordHash,
                status: true
            })

            /* jwt token generation */
            return { token: await generateToken({ username, id }) }
        } catch (error) {
            throw error
        }
    }

    async fetchDetail({ userPayload }) {
        try {
            const { id } = userPayload
            return { data: await this.usersRepository.get({ id }) }
        } catch (error) {
            throw error
        }
    }

    async verifyUser(requestObject) {
        try {

            const { id } = requestObject

            const user = await this.usersRepository.get({ id })

            if (!user.status) {
                throw new ValidationError(requestObject, "User InActive!")
            }

            return user

        } catch (error) {
            throw error
        }
    }
}