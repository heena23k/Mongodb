const { dbConnection } = require('./db');

async function main() {
    try {
        const db = await dbConnection();
        const collection = db.collection('users');

        const updatedResult = await collection.updateMany(
            { name: "John" },
            { $set: { age: 35 } }
        );

        console.log(`Matched ${updatedResult.matchedCount} documents`);
        console.log(`Modified ${updatedResult.modifiedCount} documents`);
    } catch (error) {
        console.error('Error updating documents:', error);
    }
}

main();
