const express = require("express");
const { dbConnector } = require("./src/config/configDb");
const app = express()
require('dotenv').config()
const cors = require('cors');
const hrUserSchema = require("./src/models/hrUser");
const qaUserSchema = require("./src/models/qaUser");
const deviceSchema = require("./src/models/device");
const machineSchema = require("./src/models/machine");
const training = require("./src/models/tranings");
const port = 1000
app.use(cors({ origin: '*' }))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




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
dbConnector()

app.post('/app/add/trainentries', async (req, res) => {
    // try {
    let userTraining = new training(req.body)
    await userTraining.save()
    res.send({
        message: 'ok'
    })
})
app.get('/', (req, res) => {

    console.log({
        message: 'hello'
    });
    res.send({
        message: 'hello'
    });

})


app.post('/app/add/hrdata', async (req, res) => {
    try {
        let employeeDetails = new hrUserSchema(req.body)
        await employeeDetails.save()
        res.send({
            message: 'ok'
        })
    } catch (error) {
        res.send({
            message: 'something went wrong',
            error: error
        })
    }
})
app.get('/app/employees', async (req, res) => {
    let employess = await hrUserSchema.find()
    res.send(employess)
})

app.post('/app/add/qadata', async (req, res) => {
    try {
        let employeeDetails = new qaUserSchema(req.body)
        await employeeDetails.save()
        res.send({
            message: 'ok'
        })
    } catch (error) {
        res.send({
            message: 'something went wrong',
            error: error
        })
    }
})

app.post('/app/add/device', async (req, res) => {
    try {
        let deviceDetails = new deviceSchema(req.body)
        await deviceDetails.save()
        res.send({
            message: 'ok'
        })
    } catch (error) {
        res.send({
            message: 'something went wrong',
            error: error
        })
    }
})

app.post('/app/add/machine', async (req, res) => {
    try {
        let machineDetails = new machineSchema(req.body)
        await machineDetails.save()
        res.send({
            message: 'ok'
        })
    } catch (error) {
        res.send({
            message: 'something went wrong',
            error: error
        })
    }
})

app.get('/app/machines', async (req, res) => {
    let machines = await machineSchema.find()
    res.send(machines)
})
app.get('/app/devices', async (req, res) => {
    let devices = await deviceSchema.find()
    res.send(devices)
})
app.get('/app/pendingemployee', async (req, res) => {
    let PendingEmployess = await qaUserSchema.find()
    res.send(PendingEmployess)
})

app.post('/app/deleteemployee', async (req, res) => {
    await qaUserSchema.deleteOne({ _id: req.body.id })
})

app.get('/app/trainings', async (req, res) => {
    let employess = await training.find()
    res.send(employess)
})


app.listen(port, () => {
    console.log(`server running on port ${port} sucessfully...`);
    dbConnector()
})
