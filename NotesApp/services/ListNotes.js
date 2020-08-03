const path = require('../common/PathToData');
const NotesRepository = require('../repository/NotesRepository');

const listNotes = () => {
    let data = new NotesRepository().LoadNotes(path); 
    console.log(data);
}

module.exports = listNotes;
