// connect mongodb to nodejs

const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017'; // Replace with your MongoDB connection string

const client = new MongoClient(url);
const dbName = 'mydatabase'; // Replace with your database name
// async function main(){
//     await client.connect();
//     console.log('Connected to MongoDB');
//     const db = client.db(dbName);
//     const collection = db.collection('people'); // Replace with your collection name
//     const findResult = await collection.find().toArray();
//     console.log('Found documents =>', findResult);
// }

// main();

const dbConnection = async()=>{
    try{
        await client.connect();
        console.log('connected successfully to server');
        const db = client.db(dbName);
        return db;

    }
    catch(error){
        console.error('failed to connect to the database',error);
        throw error;
    }
}
module.exports = dbConnection;