const buildListCommand = (yargs) => {

    yargs.command({
        command: 'list',
        describe: 'list all the notes',
        handler: () => console.log('listing all the notes') 
    });

} 

module.exports = buildListCommand;
