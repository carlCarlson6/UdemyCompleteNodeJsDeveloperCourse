const uuid = require('uuid')

class Note {
    constructor(title, body) {
        this.id = uuid.v4();
        this.title = title;
        this.body = body;
    }
}

module.exports = Note;