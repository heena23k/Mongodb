const {dbConnection} = require('./db');
async function main(){
    try{
        const db = await dbConnection();
        const  collection = db.collection('users');
        const filter = {name:'John'};

      const deletedResult =   await collection.deleteMan(filter);
      console.log(`Deleted ${deletedResult.deletedCount} document(s)`);
      
    }
    catch(error){
        console.error('Error connecting to the database', error);
    }
}
main();