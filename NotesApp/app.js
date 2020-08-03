const yargs = require('yargs');
const buildController = require('./controllers/ControllersBuilder');

buildController();
yargs.parse();