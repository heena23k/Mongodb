const{dbConnection} = require('./db');
async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('users');
        const findResult = await collection.find().toArray();
        console.log('Found documents =>', findResult);

        
    }
    catch(error){
        console.log('Error connecting to the database', error);
        
    }
}
main();