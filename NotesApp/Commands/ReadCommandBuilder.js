const yargs = require('yargs');
const readNote = require('../controllers/ReadNote');

const buildReadCommand = () => {
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

        handler: (argsv) => {
            const {title} = argsv;
            readNote(title);
        } 
    });

}

module.exports = buildReadCommand;
