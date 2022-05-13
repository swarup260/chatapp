const { MongoClient } = require("mongodb");


const DB = "chat";
const COLLECTION = "socket.io-adapter-events";


const mongoClient = new MongoClient("mongodb://localhost:27017/?replicaSet=rs0", {
    useUnifiedTopology: true,
});


module.exports = async () => {
    await mongoClient.connect();

    try {
        await mongoClient.db(DB).createCollection(COLLECTION, {
            capped: true,
            size: 1e6
        });
    } catch (error) {
        throw error
        // collection already exists
    }
    return mongoClient.db(DB).collection(COLLECTION);

}