const mongoose = require('mongoose')

const connectionURL = 'mongodb://172.17.0.2:27017/task-manager'

const findByPrice = (priceParam) => {
    mongoose.connect(connectionURL, {useUnifiedTopology: true, useCreateIndex: true})

    const User = mongoose.model('User', {
        name: {
            type: String
        },
        age: {
            type: Number
        }
    })

    const me = new User({
        name: 'Sanan',
        age: 25
    })

    me.save()
    .then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
}

const saveUser = () => {
    mongoose.connect(connectionURL, {
        useUnifiedTopology: true, 
        useCreateIndex: true, 
        useNewUrlParser: true})

    const User = mongoose.model('User', {
        name: {
            type: String
        },
        age: {
            type: Number | String
        }
    })

    const me = new User({
        name: 'Sanan',
        age: '25ff'
    })

    me.save()
    .then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = {
    findByPrice: findByPrice,
    saveUser: saveUser
}