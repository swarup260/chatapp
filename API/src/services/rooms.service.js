const ValidationError = require("../error/ValidationError")
const joi = require('joi')

module.exports = class RoomsService {
    /**
     * 
     * @param {Object} param0 
     * @param {import("../repositories/rooms.repository")} param0.roomsRepository
     */
    constructor({ roomsRepository }) {
        this.roomsRepository = roomsRepository
    }

    async create(requestObject) {
        try {
            /* joi string validation */
            const schema = joi.object({
                name: joi.string().min(3).max(10).required()
            })
            await schema.validateAsync(requestObject)

            return await this.roomsRepository.save({
                ...requestObject,
                status: true
            })

        } catch (error) {
            throw error
        }
    }

    async update(requestObject) {
        try {

            /* joi string validation */
            const schema = joi.object({
                update: joi.object({
                    name: joi.string()
                }),
                id: joi.string().required()
            })

            await schema.validateAsync(requestObject)

            const { id, udpate } = requestObject

            const room = this.roomsRepository.get({ id, status: true })

            if (!room) {
                throw new ValidationError("Room Not Found")
            }

            return this.roomsRepository.update({ id }, { ...udpate })
        } catch (error) {
            throw error
        }
    }

    async getAll({ filter, limit, offset }) {
        try {
            return await this.roomsRepository.getAll({ filter, limit, offset })
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
            const room = this.roomsRepository.get({ id, status: true })
            if (!room) {
                throw new ValidationError("Room Not Found")
            }

            return this.roomsRepository.update({ ObjectId: id }, { status: false })

        } catch (error) {
            throw error
        }
    }
}