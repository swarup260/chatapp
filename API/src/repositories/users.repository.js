const ValidationError = require('../error/ValidationError')

module.exports = class UsersRepository {
    /**
     * 
     * @param {Object} param0 
     * @param {import("../doa/users.doa")} param0.userDoa
     */
    constructor({ userDoa }) {
        this.userDoa = userDoa
    }

    async save(payload) {
        try {

            if (Object.keys(payload).length == 0) {
                throw new ValidationError(condition, "params missing!")
            }

            const result = await this.userDoa.save(payload)
            if (!result) {
                throw new ValidationError(payload, "Failed to Save")
            }
            return { id: result[0] }
        } catch (error) {
            throw error
        }
    }

    async get(condition) {
        try {

            if (Object.keys(condition).length == 0) {
                throw new ValidationError(condition, "params missing!")
            }

            const user = await this.userDoa.get(condition)

            if (!user) {
                throw new ValidationError(condition, "User doesn't Exists!")
            }

            return user[0]

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

            const result = await this.userDoa.update({
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
            const result = this.userDoa.delete(condition)
            if (!result) {
                throw new ValidationError(payload, "Failed to delete")
            }
            return result



        } catch (error) {

        }
    }
} 