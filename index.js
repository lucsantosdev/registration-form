const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()

// testing server connection
app.get("/", (req, res) => {
    res.send("Server connection is successful")
}).listen(3000)

console.log("Listening on port 3000")