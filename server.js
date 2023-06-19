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
})
app.post('/auth/check', (req, res) => {
    if (req.body.email === 'hr@gmail.com') {
        if (req.body.password === '123456') {
            res.send({
                user: 'hr',
                message: 'user authrized'
            })
        } else {
            res.send({
                message: 'wrong password'
            })
        }
    } else if (req.body.email === 'tech@gmail.com') {
        if (req.body.password === '123456') {
            res.send({
                user: 'tech',
                message: 'user authrized'
            })
        } else {
            res.send({
                message: 'wrong password'
            })
        }
    }
    else if (req.body.email === 'qa@gmail.com') {
        if (req.body.password === '123456') {
            res.send({
                user: 'qa',
                message: 'user authrized'
            })
        } else {
            res.send({
                message: 'wrong password'
            })
        }
    } else {
        res.send({
            user: 'unauthrized user',
            message: 'user not found'
        })
    }
})

app.listen(port, () => {
    console.log(`server running on port ${port} sucessfully...`);
    // dbConnector()
})