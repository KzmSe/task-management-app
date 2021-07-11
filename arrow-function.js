const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },
    {
        text: 'Clean yard',
        completed: false
    },
    {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        return this.tasks.filter((task) => task.completed === false)
    }
}

const getOpenTasks = () => {
    return tasks.getTasksToDo()
}

const standardFunction = function standardFunction() {
    return tasks.getTasksToDo()
}

const anonymousFunction = function() {
    return tasks.getTasksToDo()
}

const longArrowFunction = () => {
    return tasks.getTasksToDo()
}

const shortArrowFunction = () => tasks.getTasksToDo()

module.exports = {
    getOpenTasks: getOpenTasks,
    standardFunction: standardFunction,
    anonymousFunction: anonymousFunction,
    longArrowFunction: longArrowFunction,
    shortArrowFunction: shortArrowFunction
}