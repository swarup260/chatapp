const { EventEmitter } = require('node:events')
const PersistentMessageSchema = require('../schemas/persistentMessage.schema')

const EVENTS = {
    SAVE: 'SAVE',
    LOGGER: 'LOGGER'
}

const persistentMessageEvent = new EventEmitter()


const saveMessage = async ({ body, userID }) => {
    const createdAt = new Date()
    const newMessage = new PersistentMessageSchema({
        body,
        userID,
        createdAt
    })
    await newMessage.save()

}
/* HANDLERS */

persistentMessageEvent.on(EVENTS.SAVE, saveMessage).on(EVENTS.SAVE, (...val) => console.log({ val }))


module.exports = { persistentMessageEvent, EVENTS }


