const express = require("express");
const { dbConnector } = require("./src/config/configDb");
const app = express()
require('dotenv').config()
const port = 1000


app.get('/', (req, res) => {
    res.send('welcome');
})

app.listen(port, () => {
    console.log(`server running on port ${port} sucessfully...`);
    dbConnector()
})