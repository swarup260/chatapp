const eventEnum = {
    SEND_MESSAGE: 'SEND_MESSAGE',
    RECIEVE_MESSAGE: 'RECIEVE_MESSAGE',
    BOARDCAST_MESSAGE: 'BOARDCAST_MESSAGE',
    USER_CONNECTED: 'USER_CONNECTED',
    CREATE_NEW_ROOM: 'CREATE_NEW_ROOM'
}

const channels = {
    NOTIFICATION: "notification"
}

module.exports = {
    eventEnum,
    channels
}