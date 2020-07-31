const yargs = require('yargs');
const listNotes = require('../repository/ListNotes');

const buildListCommand = () => {

    yargs.command({
        command: 'list',
        describe: 'list all the notes',
        handler: listNotes 
    });

} 

module.exports = buildListCommand;
