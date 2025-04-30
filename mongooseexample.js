const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
  
});
const UserModel = mongoose.model('Users',UsersSchema);


const main = async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
    console.log('Connected to MongoDB');
    const newData = new UserModel({
        name: 'John Daae',
        age: 17,
        email: 'john@gmail.com'
    });
    await newData.save();
    console.log('Data saved to MongoDB');

    
}

main();