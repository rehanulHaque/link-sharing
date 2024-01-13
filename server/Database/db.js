const mongoose = require('mongoose')

module.exports = db = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database Connected')
    } catch (error) {
        console.log(error.message)
    }
}