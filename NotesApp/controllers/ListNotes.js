const path = require('../common/PathToData');
const DataManager = require('../repository/DataManager');

const listNotes = () => {
    let data = new DataManager().LoadData(path); 
    console.log(data);
}

module.exports = listNotes;
