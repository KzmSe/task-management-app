const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('../utility/bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})
    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.checkPasswords(password, user.password)
    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

userSchema.methods.generateToken = async function (secretKey) {
    const user = this
    const token = jwt.sign({_id: user.id.toString(), name: 'Sanan'}, secretKey,{expiresIn: '2 hours'})

    user.tokens = user.tokens.concat({token})
    await user.save()

    console.log(user)

    return token
}

userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hashPassword(user.password)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User