require('../db/mongoose')
const User = require('../model/user')


// User.findByIdAndUpdate("60ec3cb57618cfa9fbb5562c", {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1}) 

//  }).then((count) => {
//      console.log(count)

//  }).catch((error) => {
//     console.log(error)
//  })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                reject('Numbers must be greater than zero')
            }
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(1, 99)
    console.log('---')
    const sum2 = await add(sum, 50)
    console.log('---')
    const sum3 = await add(sum2, 3)
    console.log('---')
    return sum3
}

doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log(e)
})