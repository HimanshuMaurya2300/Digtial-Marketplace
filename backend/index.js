require('dotenv').config()
const express = require('express')
const connectDB = require('./database/db.config')
const app = express()
const PORT = process.env.PORT

app.use(express.json())

connectDB()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})