const bcrypt = require('bcrypt')

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 8)
}

const checkPasswords = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword)
}

module.exports = {
    hashPassword: hashPassword,
    checkPasswords: checkPasswords
}