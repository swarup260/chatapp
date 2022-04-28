const ApplicationError = require("../error/ApplicationError")
const crypto = require('crypto')
const util = require('util')
const scrypt = util.promisify(crypto.scrypt)

module.exports = {

    async generateToken(payload){
        try {
            return jsonwebtoken.sign(payload,await this.getPrivateKey(),{algorithm:  "RS256"})
        } catch (error) {
            throw error
        }
    },
    async verifyTokenPayload(token) {
        try {
            return await jsonwebtoken.verify(token,await getPublicKey(),{ algorithm:  ["RS256"] })
        } catch (error) {
            throw new ApplicationError('Unauthorised Access')
        }
    },
    async encrpytPassword(txtPassword) {
        try {

            const randomSalt = crypto.randomBytes(10).toString('hex')
            const encrpytPassword = await scrypt(txtPassword, randomSalt, 64)

            return `${encrpytPassword.toString('hex')}::${randomSalt}`

        } catch (error) {
            throw error
        }
    },
    async verifyPassword(txtPassword, passwordHash) {
        try {

            const [encrpytPassword, salt] = passwordHash.split("::")
            const keyBuffer = Buffer.from(encrpytPassword, 'hex')
            const hashPassword = await scrypt(txtPassword, salt, 64)
            return crypto.timingSafeEqual(keyBuffer, hashPassword)
        } catch (error) {
            throw error
        }
    },
    async getPrivateKey() {
        try {
            return await fs.readFile('./privatekey.pem', 'utf-8')
        } catch (error) {
            throw error
        }
    },
    async getPublicKey() {
        try {
            return await fs.readFile('./publickey.pem', 'utf-8')
        } catch (error) {
            throw error
        }
    }

}