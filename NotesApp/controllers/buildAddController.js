const yargs = require('yargs');
const Note = require('../common/models/Note');
const addNote = require('../services/AddNote');

const buildAddController = () => {
    yargs.command(
        {
            command: 'add',
            
            describe: 'add a new note',
            
            builder: {
                title: {
                    describe: 'note title',
                    demandOption: true,
                    type: "string"
                },
                body: {
                    describe: 'note body',
                    demandOption: true,
                    type: "string"
                }
                
            },
        
            handler: (argsv) => addNote(new Note(argsv.title, argsv.body))
        }
    );

}

module.exports = buildAddController;
