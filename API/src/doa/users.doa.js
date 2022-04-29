module.exports = class UsersDataAccess {
    /**
     * 
     * @param {import("knex").Knex} KnexInstance 
     */
    constructor(KnexInstance) {
        this.KnexInstance = KnexInstance('users')
    }


    async save(payload) {
        try {
            return this.KnexInstance.insert(payload)
        } catch (error) {
            throw error
        }
    }

    async get(condition) {
        try {
            return await this.KnexInstance.select('*').where(condition)
        } catch (error) {
            throw error
        }
    }

    async update({ condition, payload }) {
        try {
            return this.KnexInstance.where(condition).update(payload)
        } catch (error) {
            throw error
        }
    }

    async delete({ condition }) {
        try {
            return this.KnexInstance.where(condition).del()
        } catch (error) {
            throw error
        }
    }

}