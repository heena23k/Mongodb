const express = require('express');
const app =express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017')
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
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})