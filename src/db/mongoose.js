const mongoose = require('mongoose')

const connectionURL = 'mongodb://172.17.0.2:27017/task-manager'

mongoose.connect(connectionURL, {useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false})
