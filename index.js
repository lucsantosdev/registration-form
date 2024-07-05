const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

// testing server connection
/*  
app.get("/", (req, res) => {
    res.send("Server connection is successful")
}).listen(3000) 
*/

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://localhost:27017/Database')
const db = mongoose.connection
db.on('error', () => console.log("Error in Database connection."))
db.once('open', () => console.log("Connected to Database."))

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
}).listen(3000)

console.log("Listening on port 3000")