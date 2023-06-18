const express = require("express");
const { dbConnector } = require("./src/config/configDb");
const app = express()
require('dotenv').config()
const cors = require('cors');
const port = 1000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('welcome');
    // res.send(process.env.USERS);
})
app.post('/auth/check', (req, res) => {
    if (req.body.email === 'ameenansari@gmail.com' || req.body.email === 'asmarnaeem@gmail.com') {
        if (req.body.password === '123456') {
            res.send('you r admin')
        } else {
            res.send('wrong password')
        }
    } else {
        res.send('you r not a admin')
    }
})

app.listen(port, () => {
    console.log(`server running on port ${port} sucessfully...`);
    // dbConnector()
})