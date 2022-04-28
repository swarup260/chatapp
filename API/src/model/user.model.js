const joi = require('joi')
const ValidationError = require('../error/ValidationError')
module.exports = class UserModel {
    /**
     * 
     * @param {Object} param
     * @param { import("knex").Knex } param.dbInstance
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

            await this.dbInstance.insert(payload)
        } catch (error) {
            throw error
        }
    }

    async get(key, val ) {
        try {

            if (!id) {
                throw new ValidationError("ID missing!")
            }

            const user = await his.dbInstance.select('*').where(key, val)

            if (!user) {
                throw new ValidationError("User doesn't Exists!")
            }

            return user[0]

        } catch (error) {
            throw new ValidationError(error)
        }
    }

    async update(payload, id) {

    }

    async delete(id) {

    }






}

