const express = require('express');
const app = express();
const { dbConnection } = require('./database.js');

app.get('/', async (req, res) => {
    try {
      const db = await dbConnection();
      const collection = db.collection('example');
      const users = await collection.find().toArray();
      res.json(users);
    } catch (err) {
      console.error('Error fetching users:', err);
      // Respond with the error for debugging
      res.status(500).json({ error: err.message });
      throw err;
    }
  });
  // post request to add a user
  app.post('/users',async(req,res)=>{
   const db = await dbConnection();
   console.log(res.body);
    const collection = db.collection('example');
    let result = collection.insertOne(req.body);
    res.json("Updated ")
    
    

  })
  //put method to update a user
  app.put('/users/:name',async(req,res)=>{
    const db = await dbConnection();
    const collection = db.collection('example');
    let singleData = collection.updateOne({name:req.params.name},{$set:{name:"mickle angel"}})
    res.json("Put method called")
  })
// delete
app.delete('/users/:name',async(req,res)=>{
    const db = await dbConnection();
    const collection = db.collection('example');
    let userName  = req.params.name;
    collection.deleteOne({name:userName})
    res.send("Delete method called")
  }) 
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
