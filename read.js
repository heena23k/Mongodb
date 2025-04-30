const {MongoClient} = require('mongodb')
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'myDatabase';
const client =  new MongoClient(url);
const connectToDatabase = async()=>{
    try{
        await client.connect();
        console.log('Connected successfully to database');
        const db = client.db(dbName);
        
    }
    catch(error){
        console.log(error);
    }
}
module.exports={connectToDatabase}