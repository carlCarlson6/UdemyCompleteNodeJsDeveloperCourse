const yargs = require('yargs');
const removeNote = require('../services/RemoveNote');

const buildRemoveController = () => {
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

        handler: (argsv) => removeNote(argsv.title)
    });

}

module.exports = buildRemoveController;
