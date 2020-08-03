const NotesRepository = require('../repository/NotesRepository');
const path = require('../common/PathToData');

const addNote = (note) => {
    const repository = new NotesRepository();
    let data = repository.LoadNotes(path); 
    data.push(note);
    repository.SaveNotes(path, data);
}

module.exports = addNote;
