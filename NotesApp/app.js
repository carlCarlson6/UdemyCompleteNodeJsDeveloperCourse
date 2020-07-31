const yargs = require('yargs');
const commandBuilder = require('./CommandsBuilder');

commandBuilder(yartgs)

//yargs.command({
//    command: 'add',
//    describe: 'add a new note',
//    builder: {
//        title: {
//            describe: 'note title',
//            demandOption: true,
//            type: "string"
//        }
//        
//    },
//    handler: (argv) => {
//        const {title} = argv;
//        console.log('adding a new note', title);
//    }
//});
//
//yargs.command({
//   command: 'remove',
//   describe: 'remove a note',
//   handler: () => console.log('removing the note') 
//});
//
//yargs.command({
//    command: 'list',
//    describe: 'list all the notes',
//    handler: () => console.log('listing the notes')
//});
//
//yargs.command({
//   command: 'read',
//   describe: 'read a note',
//   handler: () => console.log('reading the notes') 
//});


yargs.parse();