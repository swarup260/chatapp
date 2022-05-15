const ValidationError = require('../error/ValidationError')

module.exports = class RoomsRepository {
    /**
     * 
     * @param {Object} param0 
     * @param {import("../doa/rooms.doa")} param0.Doa
     */
    constructor({ Doa }) {
        this.Doa = Doa
    }

    async save(payload) {
        try {

            if (Object.keys(payload).length == 0) {
                throw new ValidationError(condition, "params missing!")
            }

            const result = await this.Doa.save(payload)
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
                throw new ValidationError(condition, "params missing!")
            }

            const message = await this.Doa.get(condition)
            if (!message) {
                throw new ValidationError(condition, "Message doesn't Exists!")
            }

            return message

        } catch (error) {
            throw new ValidationError(condition, error)
        }
    }

    async getAll(condition) {
        try {

            if (Object.keys(condition).length == 0) {
                throw new ValidationError(condition, "params missing!")
            }

            const messages = await this.Doa.getAll(condition)
            if (!messages) {
                throw new ValidationError(condition, "Message doesn't Exists!")
            }

            return messages

        } catch (error) {
            throw new ValidationError(condition, error)
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

            const result = await this.Doa.update({
                condition,
                payload
            })
            if (!result) {
                throw new ValidationError({ payload, condition }, "Failed To Updated")
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
            const result = this.Doa.delete(condition)
            if (!result) {
                throw new ValidationError(payload, "Failed to delete")
            }
            return result



        } catch (error) {

        }
    }
} 