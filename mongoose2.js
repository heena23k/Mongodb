const express = require('express');
const app =express();
const mongoose = require('mongoose');
const uri = 'mongodb+srv://dxo:testing1234@cluster0.y9uszru.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri)
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    })

    const Book = mongoose.model('Book', bookSchema);
//get 
app.get('/books',async(req,res)=>{
    try{
        const books = await Book.find();
        res.json(books);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})
// middleware 
app.use(express.json());
// middleware to parse JSON data in the request body


// post 
app.post('books',async(req,res)=>{
    console.log(req.body);
    
    try{
        const{title,author}= req.body;
        const newBook = new Books({ title,author});
        await newBook.save();
        res.status(201).json(newBook);
    }catch(error){
        res.status(500).json({message: error.message});
    }

})
// put 
app.put('/books/:id',async(req,res)=>{
    console.log(req.params);
    const{id} = req.params;
    const {title,author} = req.body;
   const updatedBook =  await Books.findByIdAndUpdate(id,{title,author});
   res.json(updatedBook);
    
})
//delete 
app.delete('/books/:id',async(req,res)=>{
    const{id} = req.params;
   await Books.findByIdAndDelete(id);
    res.sendStatus(204);
    
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})