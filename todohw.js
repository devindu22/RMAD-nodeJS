const fs = require('fs')
const yargs = require('yargs')

const getTodos = () => {
    return JSON.parse(fs.readFileSync('test.json').toString())
}

const writeFile = (todoArray) => {
    fs.writeFileSync('test.json', JSON.stringify(todoArray))
}

yargs.command({
    command: 'get',
    describe: 'get all todos',
    handler: function() {
        console.log(getTodos())
    }
})

yargs.command({
    command: 'add',
    describe: 'add new todo',
    builder: {
        title: {
            describe: 'title',
            demandOption: true,
            type: 'string'
        },
        title: {
            describe: 'status',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        const todoArray = getTodos()
        
        const newTodo = {
            id: todoArray.length + 1,
            title: argv.title,
            status: argv.status
        }

        todoArray.push(newTodo)
        writeFile(todoArray)
    }
})

yargs.command({
    command: 'status',
    describe: 'change todo status',
    builder: {
        id: {
            describe: 'id',
            demandOption: true,
            type: 'number'
        },
        status: {
            describe: 'status',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        const todoArray = getTodos()
        
        const index = todoArray.findIndex((obj => obj.id === argv.id))

        if (index < 0) {
            console.log(`Unable to find a todo with id ${argv.id}`)
        } else {
            todoArray[index].status = argv.status
            writeFile(todoArray)
        }
    }
})


yargs.parse()