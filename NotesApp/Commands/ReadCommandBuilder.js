const yargs = require('yargs');

const buildReadCommand = () => {
    
    yargs.command({
        command: 'read',
        describe: 'read a note',
        handler: () => console.log('reading the notes') 
    });

}

module.exports = buildReadCommand;
