const fs = require('fs');

const addNote = (note) => {
    const dataBuffer = fs.readFileSync('repository/data/notes.json');
    let data = JSON.parse(dataBuffer.toString());
    
    data.push(note);

    const dataString = JSON.stringify(data);
    fs.writeFileSync('repository/data/notes.json', dataString);
}

module.exports = addNote;
