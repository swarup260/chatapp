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
                name: joi.string().min(3).max(10)
            })
            await schema.validateAsync(requestObject)

            const room = await this.roomsRepository.save({
                ...requestObject,
                status: true
            })

            return room

        } catch (error) {
            throw error
        }
    }

    async update(requestObject) {
        try {

            /* joi string validation */
            const schema = joi.object({
                name: joi.string().min(3).max(10)
            })
            await schema.validateAsync(requestObject)

            const room = this.roomsRepository.get({ id: id, status: true })
            if (!room) {
                throw new ValidationError("Room Not Found")
            }

            return this.roomsRepository.update({ id: id }, { ...requestObject })
        } catch (error) {
            throw error
        }
    }

    async getAll() {
        try {
            return await this.roomsRepository.getAll({ status: true })
        } catch (error) {
            throw error
        }
    }

    async get(id) {
        try {
            return this.roomsRepository.get({ id: id, status: true })
        } catch (error) {
            throw error
        }
    }

    async delete(id) {
        try {
            const room = this.roomsRepository.get({ id: id, status: true })
            if (!room) {
                throw new ValidationError("Room Not Found")
            }

            return this.roomsRepository.update({ ObjectId: id }, { status: false })

        } catch (error) {
            throw error
        }
    }


}