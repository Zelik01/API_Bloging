const express = require('express');
const bodyParser = require('body-parser')
const passport = require('passport')
const {connectToMongoDB} = require('./config/db')
require('dotenv').config()
const userRoute = require('./routes/postRoutes')
const postRoute = require('./routes/userRoutes')

const app = express()
//connect to DB
connectToMongoDB()

app.use(passport.initialize());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/user', userRoute)
app.use('/post', postRoute)
//home page
app.get('/', (req,res)=>{
    res.status(200).json({
        status: "true",
        message: "Welcome to Blogging API"
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`Server runing on http://localhost:${process.env.PORT} Successfully`)
})