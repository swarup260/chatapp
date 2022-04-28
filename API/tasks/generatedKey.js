(async function () {
    // require module
    const crypto = require('crypto')
    const fs = require('fs')
    const { promisify } = require('util')
    const writeFile = promisify(fs.writeFile)
    const generateKeyPair = promisify(crypto.generateKeyPair)
    try {
        // config for private and public key
        const CONFIG = {
            modulusLength: 4096,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem'
            }
        }


        const {
            publicKey,
            privateKey
        } = await generateKeyPair('rsa', CONFIG)

        await writeFile(`privateKey.pem`, privateKey)
        await writeFile(`publicKey.pem`, publicKey)

    } catch (error) {
        console.log(error)
    }



})()