const bcrypt = require('bcrypt')

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 8)
}

const checkPasswords = async (hashedPassword, password) => {
    const promise = await bcrypt.compare(hashedPassword, password)

    promise.then((password) => {
        return password
    }).catch((error) => {
        return error
    })
}

module.exports = {
    hashPassword: hashPassword,
    checkPasswords: checkPasswords
}