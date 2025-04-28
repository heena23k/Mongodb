// Api using nodejs+expressJs+mongodb

const express = require('express');
const app = express();
const { connectToDatabase } = require('./database.js');

app.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('users');
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
