const {dbConnection} = require('./db');
async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('users');
        const data = [
            { name: 'John', age: 30},
            { name: 'Jane', age: 25},
            { name: 'Bob', age: 35}

        ];
       const insertResult =   await collection.insertMany(data);
    //    console.log('Inserted documents =>', inserResult.insertedCount);
       console.log(`${insertResult.insertedCount} documents inserted`);

       
    }
    catch(error){
        console.log('Error connecting to the database', error);
    }
}
main();