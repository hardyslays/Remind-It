const express = require("express")
const app = express()
const cors = require('cors')
const authHandler = require('./routes/authHandler/auth')
const apiHandler = require('./routes/apiHandler/api')
const mongoose = require("mongoose")
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
require("dotenv").config()

const PORT = process.env.PORT | 5000

app.use(cors())
app.use(express.json())


//Connecting database
mongoose.connect(process.env.DB_URL, () => {
    console.log("Database connected")
})


// Routes
app.use('/auth', authHandler)
app.use('/api', apiHandler)

app.get('/', (req,res) => {
    res.json({
        'msg':'hello'
    })
})

  //Listen on PORT 5000
app.listen(PORT, () => {
    console.log(`Server started on Port: ${PORT}!!!`);
})
 