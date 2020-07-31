const fs = require('fs');

const listNotes = () => {
    const dataBuffer = fs.readFileSync('repository/data/notes.json');
    let data = JSON.parse(dataBuffer.toString());
    console.log(data);
}

module.exports = listNotes;
