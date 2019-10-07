const {Command, flags} = require("@oclif/command");
const {db, Todo} = require("../db");

class AddCommand extends Command {
    async run () {
        const {flags: {task}} = this.parse(AddCommand);

        const res = await Todo.push({
            task,
            id: Todo.value().length,
            done: false,
        }).write();

        this.log(res);
    }
}

AddCommand.description = "Add command description";

AddCommand.flags = {
    task: flags.string({cahr: "n", description: "task"})
};

module.exports = AddCommand;
