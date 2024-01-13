require('dotenv').config()
const express = require("express")
const cors = require("cors")
const db = require("./Database/db")
const userRoutes = require("./routes/userRoutes")
const urlRoute = require("./routes/urlRoute")
const app = express()


app.use(cors())
app.use(express.json())
app.use('/api/v1', userRoutes)
app.use('/api/v1', urlRoute)

db()
app.listen(3000, () =>{
    console.log('App Running')
})