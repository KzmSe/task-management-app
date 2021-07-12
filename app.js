const express = require('express')
const taskService = require('./service/task-service')

const app = express()

app.get('/tasks', (req, res) => {
    const priceParam = req.query.price
    const result = taskService.findByPrice(parseInt(priceParam))
    res.send(result)
})

app.get('/saveUser', (req, res) => {
    const result = taskService.saveUser()
    res.send(result)
})

app.listen(3000, () => {
    console.log('Server is ip on port 3000')
})