const yargs = require('yargs');

const buildRemoveCommand = () => {
    
    yargs.command({
        command: 'remove',
        describe: 'remove a note',
        handler: () => console.log('removing the note') 
    });

}

module.exports = buildRemoveCommand;
