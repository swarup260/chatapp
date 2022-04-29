const joi = require('joi')
const ValidationError = require('../error/ValidationError')
module.exports = class UserModel {
    /**
     * 
     * @param {Object} param
     * @param { import("../dataAccess/users.dataAcess") } param.dbInstance
     */
    constructor({ dbInstance }) {
        this.dbInstance = dbInstance
    }


    async save(payload) {
        try {
            const schema = joi.object({
                username: joi.string().min(5).required(),
                email: joi.string().required().email(),
                password: joi.string().min(6).max(20).required(),
            })

            /* validation payload  */
            await schema.validateAsync(schema)

            const result = await this.dbInstance.save(payload)
            if (!result) {
                throw new ValidationError(payload, "Failed to Save")
            }
            return result
        } catch (error) {
            throw error
        }
    }

    async get(condition) {
        try {

            if (Object.keys(condition).length == 0) {
                throw new ValidationError(condition,"params missing!")
            }

            const user = await this.dbInstance.get(condition)

            if (!user) {
                throw new ValidationError(condition,"User doesn't Exists!")
            }

            return user[0]

        } catch (error) {
            throw new ValidationError(condition,error)
        }
    }

    async update(payload, condition) {
        try {

            if (Object.keys(condition).length == 0) {
                throw new ValidationError("params missing!")
            }

            if (Object.keys(payload).length == 0) {
                throw new ValidationError("payload missing!")
            }

            const result = await this.dbInstance.update({
                condition,
                payload
            })
            if (!result) {
                throw new ValidationError({payload, condition},"Failed To Updated")
            }

        } catch (error) {
            throw error
        }
    }

    async delete(condition) {
        try {

            if (Object.keys(condition).length == 0) {
                throw new ValidationError("params missing!")
            }
            const result = this.dbInstance.delete(condition)
            if (!result) {
                throw new ValidationError(payload, "Failed to delete")
            }
            return result
            
            

        } catch (error) {

        }
    }
}

