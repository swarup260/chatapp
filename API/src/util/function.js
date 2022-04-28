const ApplicationError = require("../error/ApplicationError")
const crypto = require('crypto')
const util = require('util')
const scrypt = util.promisify(crypto.scrypt)
const jwt = require('jsonwebtoken')
const fs = require('fs')
const readFile = util.promisify(fs.readFile)

/* private functions */
async function getPrivateKey() {
    try {
        return await readFile('./privatekey.pem', 'utf-8')
    } catch (error) {
        throw error
    }
}

async function getPublicKey() {
    try {
        return await readFile('./publickey.pem', 'utf-8')
    } catch (error) {
        throw error
    }
}


module.exports = {

    async generateToken(payload) {
        try {
            return jwt.sign(payload, await getPrivateKey(), { algorithm: "RS256" })
        } catch (error) {
            throw error
        }
    },
    async verifyTokenPayload(token) {
        try {
            return await jwt.verify(token, await getPublicKey(), { algorithm: ["RS256"] })
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
}