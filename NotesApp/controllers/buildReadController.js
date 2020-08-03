const yargs = require('yargs');
const readNote = require('../services/ReadNote');

const buildReadController = () => {
    yargs.command({
        command: 'read',

        describe: 'read a note',
        
        builder: {
            title: {
                describe: 'note title',
                demandOption: true,
                type: "string"
            }
        },

        handler: (argsv) => readNote(argsv.title)
    });

}

module.exports = buildReadController;
