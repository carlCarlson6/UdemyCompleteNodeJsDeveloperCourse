const DataManager = require('../repository/DataManager');
const path = require('../common/PathToData');

const removeNote = (noteTitle) => {
    const dataManager = new DataManager();
    let data = dataManager.LoadData(path);
    let updatedNotes = data.filter(note => note.title !== noteTitle);
    dataManager.SaveData(path, updatedNotes);
}

module.exports = removeNote;
