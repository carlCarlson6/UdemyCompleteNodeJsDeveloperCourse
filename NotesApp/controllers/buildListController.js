const yargs = require('yargs');
const listNotes = require('../services/ListNotes');

const buildListController = () => {
    yargs.command({
        command: 'list',
    
        describe: 'list all the notes',
    
        handler: listNotes 
    });

} 

module.exports = buildListController;
