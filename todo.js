const fs = require('fs')

const obj = {

    id: 1,
    name: "user",
    age: 10
}

const strobj = JSON.stringify(obj)

//fs.writeFileSync('test.json', strobj)

const readJSON = fs.readFileSync('test.json')
const value = readJSON.toString()
const jsObjectArr = JSON.parse(value)
console.log(jsObjectArr)

const newTodo = {
    id: 3,
    title: 'todo3',
    status: 'todo'
}

jsObjectArr.push(newTodo)
fs.writeFileSync('test.json', JSON.stringify(jsObjectArr))

//1. get all todos: get -> node todo.js get
//2. add new todo: add -> node todo.js add --id=4 --title="todo 4" --status=todo
//3. change todo status: status -> node todo.js status --id=4 --status=done