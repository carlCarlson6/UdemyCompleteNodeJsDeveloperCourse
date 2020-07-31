const buildAddCommand = require('./AddCommandBuilder');
const buildListCommand = require('./ListCommandBuilder');
const buildReadCommand = require('./ReadCommandBuilder');
const buildRemoveCommand = require('./RemoveCommandBuilder');

const buildCommands = () => {

    buildAddCommand();
    buildListCommand();
    buildReadCommand();
    buildRemoveCommand();

}

module.exports = buildCommands;
