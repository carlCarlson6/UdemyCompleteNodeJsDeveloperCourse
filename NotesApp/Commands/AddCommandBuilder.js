const yargs = require('yargs');
const Note = require('../common/models/Note');
const addNote = require('../controllers/AddNote');

const buildAddCommand = () => {
    
    yargs.command({
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
        handler: (argv) => {
            const {title, body} = argv;
            const note = new Note(title, body);
            addNote(note);
        }
    });

}

module.exports = buildAddCommand;
