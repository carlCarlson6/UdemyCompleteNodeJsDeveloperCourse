const fs = require('fs');

class NotesRepository {
    LoadNotes(path) {
        debugger
        const notesBuffer = fs.readFileSync(path); 
        const notes = JSON.parse(notesBuffer.toString());
        debugger
        return notes;
    }

    SaveNotes(path, notes) {
        const notesString = JSON.stringify(notes);
        fs.writeFileSync(path, notesString);
    }
}

module.exports = NotesRepository;
