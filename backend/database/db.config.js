const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log('Database Connected Successfully...')
        })
        .catch((error) => {
            console.log(error)
            throw error
        })
}

module.exports = connectDB