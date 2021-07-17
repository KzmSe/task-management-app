const express = require('express')
const User = require('../model/user')

const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)
    
    try {
        await user.save()
        res.status(201).send(user)
    } catch(error) {
        res.status(400).send(error)
    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch(error) {
        res.status(500).send(error)
    }
})

router.put('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch(error) {
        res.status(400).send(error)
    }
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch(error) {
        res.status(500).send(error)
    }
})

router.delete('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = User.findByIdAndDelete(_id)
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch(error) {
        res.status(500).send(error)
    }
})

module.exports = router