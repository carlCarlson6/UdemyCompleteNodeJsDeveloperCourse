const NotesRepository = require('../repository/NotesRepository');
const path = require('../common/PathToData');

const readNote = (noteTitle) => {
    let data = new NotesRepository().LoadNotes(path); 
    const notes = data.filter(note => note.title === noteTitle);
    console.log(notes);
}

module.exports = readNote;
