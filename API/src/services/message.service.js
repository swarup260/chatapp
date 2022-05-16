const ValidationError = require("../error/ValidationError")
const joi = require('joi')

module.exports = class MessageService {
    /**
     * 
     * @param {Object} param0 
     * @param {import("../repositories/messages.repository")} param0.messageRepository
     */
    constructor({ messageRepository }) {
        this.messageRepository = messageRepository
    }

    async create(requestObject) {
        try {
            /* joi string validation */
            const schema = joi.object({
                body: joi.string(),
                userID: joi.number(),
                room: joi.string()
            })
            await schema.validateAsync(requestObject)

            const newMessage = await this.messageRepository.save({
                ...requestObject
            })

            return newMessage

        } catch (error) {
            throw error
        }
    }

    async update(requestObject) {
        try {

            /* joi string validation */
            const schema = joi.object({
                body: joi.string().min(3).max(10),
                id: joi.string()
            })
            await schema.validateAsync(requestObject)

            const message = this.messageRepository.get({ id })
            if (!message) {
                throw new ValidationError("message Not Found")
            }


            const { id, body } = requestObject

            return this.messageRepository.update({ id }, { body })
        } catch (error) {
            throw error
        }
    }

    async getAll({ filter, limit, offset }) {
        try {
            return await this.messageRepository.getAll({ filter, limit, offset })
        } catch (error) {
            throw error
        }
    }

    async get(id) {
        try {
            return this.messageRepository.get({ id })
        } catch (error) {
            throw error
        }
    }

    async delete(id) {
        try {
            const message = this.messageRepository.get({ id })
            if (!message) {
                throw new ValidationError("message Not Found")
            }

            return this.messageRepository.delete({ id })

        } catch (error) {
            throw error
        }
    }

    async deleteAll({ filter }) {
        try {
            return this.messageRepository.deleteAll({ filter })
        } catch (error) {
            throw error
        }
    }

}