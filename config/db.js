const mongoose = require('mongoose');
require('dotenv').config()


function connectToMongoDB(){
    mongoose.connect(process.env.MONGODB_URL);
    
    mongoose.connection.on("connected",()=>{
        console.log("Connection to MongoDB is successful")
    })

    mongoose.connection.on("error",(err)=>{
        console.log(err)
        console.log("An error occured.")
    })
}

module.exports={connectToMongoDB}