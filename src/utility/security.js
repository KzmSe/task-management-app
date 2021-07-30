const jwt = require('jsonwebtoken')

const generateToken = async (secretKey) => {
    return await jwt.sign({_id: '125', name: 'Sanan'}, secretKey,{expiresIn: '2 hours'})
}

const verifyToken = (token, secretKey) => {
    return jwt.verify(token, secretKey)
}

