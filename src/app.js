const express = require('express')
var bodyParser = require('body-parser')
require('./db/mongoose')
const User = require('./model/user')
const Task = require('./model/task')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port = process.env.PORT || 3000

app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.put('/users/:id', (req, res) => {
    const _id = req.params.id

    User.findByIdAndUpdate(_id, {age: 1}).then((user) => {
       console.log(user)
       return User.countDocuments({age: 1}) 

    }).then((count) => {
        console.log(count)

    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id

    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.post('/tasks', (req, res) => {
    console.log(req.body)

    const task = new Task(req.body)
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id

    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        
        res.send(task)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.listen(port, () => {
    console.log('Server is ip on port 3000')
})