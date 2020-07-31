const DataManager = require('../repository/DataManager');
const path = require('../common/PathToData');

const readNote = (noteTitle) => {
    let data = new DataManager().LoadData(path); 
    const notes = data.filter(note => note.title === noteTitle);
    console.log(notes);
}

module.exports = readNote;
