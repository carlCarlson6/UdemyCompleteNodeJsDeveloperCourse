const book = {
    title: 'hello',
    author: 'world'
}

const bookJson1 = JSON.stringify(book);
console.log(bookJson1);

const bookfromJson = JSON.parse(bookJson1);
console.log(bookfromJson);

