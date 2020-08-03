const NotesRepository = require('../repository/NotesRepository');
const path = require('../common/PathToData');

const removeNote = (noteTitle) => {
    const repository = new NotesRepository();
    let data = repository.LoadNotes(path);
    let updatedNotes = data.filter(note => note.title !== noteTitle);
    repository.SaveNotes(path, updatedNotes);
}

module.exports = removeNote;
