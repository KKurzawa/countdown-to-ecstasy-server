const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

//comment out when deploying
const PORT = process.env.PORT || 3001;

//comment out when working localally
// const PORT = 3001;

app.use(cors())
app.use(express.json())

mongoose.connect(`mongodb+srv://kurzawa1:aYfNWnHQMPTcsnna@cluster0.pcft05k.mongodb.net/CountdownToEctstasyDatabase`)
app.use('/', require('./Routes/commentRoute.js'))

app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}!`)
})