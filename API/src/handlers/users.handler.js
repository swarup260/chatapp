const { errorResponseBody } = require("../util/function")
const CODE = require("../config/ResponseCode")


module.exports = class UserHandler {

    /**
     * 
     * @param {Object} param0 
     * @param {import("../services/users.service")} param0.userService
     */
    constructor({ userService }) {
        this.userService = userService
    }

    /**
     * 
     * @param {Object} requestBody
     */
    async login(requestBody) {
        try {
            return { status: true, code: CODE.SUCCESS, message: 'success', ...await this.userService.login(requestBody) }
        } catch (error) {
            console.log(error)
            return errorResponseBody(error)
        }
    }

    /**
     * 
     * @param {Object} requestBody
     */
    async register(requestBody) {
        try {
            return { status: true, code: CODE.SUCCESS, message: 'success', ...await this.userService.register(requestBody) }
        } catch (error) {
            console.log(error)
            return errorResponseBody(error)
        }
    }

    /**
     * 
     * @param {Object} requestBody
     */
    async fetchDetail(requestBody) {
        try {
            return { status: true, code: CODE.SUCCESS, message: 'success', ...await this.userService.fetchDetail(requestBody) }
        } catch (error) {
            console.log(error)
            return errorResponseBody(error)
        }
    }


}