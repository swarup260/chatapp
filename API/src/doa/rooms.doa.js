module.exports = class RoomDataAccess {

    /**
     * 
     * @param {import("mongoose").Model} DbInstance 
     */
    constructor(DbInstance) {
        this.DbInstance = DbInstance
    }

    async save(payload) {
        try {

            const newRoom =  new this.DbInstance({...payload})
            return await newRoom.save()
        } catch (error) {
            throw error
        }
    }

    async get(condition) {
        try {
            return await this.DbInstance.findOne(condition)
        } catch (error) {
            throw error
        }
    }


    async getAll(condition){
        try {
            return await this.DbInstance.find(condition)
        } catch (error) {
            throw error
        }
    }

    async update({ condition, payload }) {
        try {
            return await this.DbInstance.findOneAndUpdate(condition,payload,{
                new: true,
            })
        } catch (error) {
            throw error
        }
    }

    async delete({ condition }) {
        try {
            return this.DbInstance.deleteOne(condition)
        } catch (error) {
            throw error
        }
    }
}