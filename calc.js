const { describe, argv } = require('yargs')
const yargs = require('yargs')

//console.log(process.argv)
//console.log(yargs.argv)

yargs.command({
    command: 'divide',
    describe: 'divide',
    builder: {
        num1: {
            describe: "number 1",
            demandOption: true,
            type: "number"
        },
        num2: {
            describe: "number 2",
            demandOption: true,
            type: "number"
        }
    },
    handler: function (argv) {
        console.log(argv.num1/argv.num2)
    }
})

yargs.command({
    command: 'sum',
    describe: 'sum',
    builder: {
        num1: {
            describe: "number 1",
            demandOption: true,
            type: "number"
        },
        num2: {
            describe: "number 2",
            demandOption: true,
            type: "number"
        }
    },
    handler: function (argv) {
        console.log(`${argv.num1} + ${argv.num2} = ${argv.num1 + argv.num2}`)
        
    }
})

yargs.command({
    command: 'mul',
    describe: 'mul',
    builder: {
        num1: {
            describe: "number 1",
            demandOption: true,
            type: "number"
        },
        num2: {
            describe: "number 2",
            demandOption: true,
            type: "number"
        }
    },
    handler: function (argv) {
        console.log('$(argv.num1)*$(argv.num2)')
        
    }
})

//console.log(yargs.argv)
yargs.parse()