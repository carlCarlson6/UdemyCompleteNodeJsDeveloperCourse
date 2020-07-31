const yargs = require('yargs');

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
            console.log('adding a new note with title =>', title);
            console.log('note body:', body);
        }
    });

}

module.exports = buildAddCommand;
