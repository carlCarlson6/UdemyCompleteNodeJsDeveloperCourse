const DataManager = require('../repository/DataManager');
const path = require('../common/PathToData');

const addNote = (note) => {
    const dataManager = new DataManager();
    let data = dataManager.LoadData(path); 
    data.push(note);
    dataManager.SaveData(path, data);
}

module.exports = addNote;
