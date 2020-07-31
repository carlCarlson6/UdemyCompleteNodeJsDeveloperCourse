const fs = require('fs');

// fs.writeFileSync('notes.txt', 'goodbye world');

fs.appendFileSync('notes.txt', '\nmore text')