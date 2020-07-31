const yargs = require('yargs');
const buildCommands = require('./Commands/CommandsBuilder');

buildCommands()

yargs.parse();