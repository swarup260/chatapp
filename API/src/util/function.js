const ApplicationError = require("../error/ApplicationError")

module.exports = {

    async verifyTokenPayload(payload) {
        try {
            return {}
        } catch (error) {
            throw new ApplicationError('Unauthorised Access')
        }
    }

}