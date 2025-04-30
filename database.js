const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';
const client = new MongoClient(url);


const connectToDataBase  = async()=>{
    try{
        await client.connect();
        console.log("Connected to database successfully");
        const db = client.db(dbName);
        return db;  
    }
    catch(error){
        console.error("Error connecting to database:", error);
      
    }
}