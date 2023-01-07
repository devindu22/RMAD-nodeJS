const yargs = require("yargs");
const fs = require("fs");

yargs.command({
  command: "get",
  describe: "get all todos",
  handler: () => {
    console.log(
      JSON.parse(fs.readFileSync("./todo.json").toString())
    );
  },
});

yargs.command({
  command: "add",
  describe: "Add new todo",
  builder: {
    id: {
      describe: "id",
      demandOption: true,
      type: "number",
    },
    title: {
      describe: "title",
      demandOption: true,
      type: "string",
    },
    status: {
      describe: "status",
      demandOption: true,
      type: "string",
    },
  },
  handler: (args) => {
    const { id, title, status } = args;
    let todos = JSON.parse(fs.readFileSync("./todo.json").toString());
    todos.push({
      id,
      title,
      status,
    });
    fs.writeFileSync("./todo.json", JSON.stringify(todos));
    console.log("todo added");
  },
});

yargs.command({
  command: "status",
  describe: "change todo status",
  builder: {
    id: {
      describe: "id",
      demandOption: true,
      type: "number",
    },
    status: {
      describe: "status",
      demandOption: true,
      type: "string",
    },
  },
  handler: (args) => {
    const { id, status } = args;
    let todos = JSON.parse(fs.readFileSync("./todo.json").toString());
    let result = todos.find((todo) => todo.id == id);
    result.status = status;
    fs.writeFileSync("./todo.json", JSON.stringify(todos));
    console.log(
      `Status changed to ${status} of todo ${id}`
    );
  },
});

yargs.parse();