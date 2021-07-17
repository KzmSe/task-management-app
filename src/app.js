const express = require('express')
const bodyParser = require('body-parser')
require('./db/mongoose')

const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(userRouter)
app.use(taskRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server is ip on port 3000')
})