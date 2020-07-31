const yargs = require('yargs');
const removeNote = require('../controllers/RemoveNote');

const buildRemoveCommand = () => {
    yargs.command({
        command: 'remove',
        
        describe: 'remove a note',
        
        builder: {
            title: {
                describe: 'note title',
                demandOption: true,
                type: "string"
            }
        },

        handler: (argsv) => {
            const {title} = argsv;
            removeNote(title);
        }
    });

}

module.exports = buildRemoveCommand;
