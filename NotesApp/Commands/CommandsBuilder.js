const buildAddCommand = require('./AddCommand');
const buildListCommand = require('./ListCommand');
const buildReadCommand = require('./ReadCommand');
const buildRemoveCommand = require('./RemoveCommand');

const commandsBuilder = (yargs) => {

    buildAddCommand(yargs);
    buildListCommand(yargs);
    buildReadCommand(yargs);
    buildRemoveCommand(yargs);

}

module.exports = commandsBuilder;
