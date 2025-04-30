const express = require('express');
const app = express();
const { connectToDatabase } = require('./database.js'); // fixed typo

app.get('/home', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('people');
        const users = await collection.find().toArray();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// post 
app.post('./users',async(req,res)=>{
    const db = await connectToDatabase();
    const collection = db.collection('users');
    let result = collection.insertOne({name:'John Doe',age:30});
    res.json(result);
})

// put
app.put('./users/:name',async(req,res)=>{
    const db = await connectToDatabase();
    const collection  = db.collection('users');
    let singleData = await collection.updateOne({name:req.params.name},{$set:req.body});
 res.send('updated');
 // delete
 app.delete('users/:name',async(req,res)=>{
    const db = await connectToDatabase();
    const collection = db.collection('users');
    const userName = req.params.name;
    collection.deleteOne({name:userName});
    res.send('Deleted');
 })

})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
