const Notes = require('./Notes');
const validator = require('validator');

console.log(new Notes().GetNotes());
console.log(validator.isEmail('foor@bar.com'));
console.log(validator.isURL('bar.com'));