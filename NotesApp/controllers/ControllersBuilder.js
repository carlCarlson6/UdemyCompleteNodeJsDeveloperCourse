const buildAddController = require('./buildAddController');
const buildListController = require('./buildListController');
const buildReadController = require('./buildReadController');
const buildRemoveController = require('./buildRemoveController');

const buildController = () => {
    buildAddController();
    buildListController();
    buildReadController();
    buildRemoveController();
}

module.exports = buildController;
