export class Library {
    constructor() {
        this.library = [];
    }

    addBook(newBook) {
        if(!this.isIn(newBook)) {
            this.library.push(newBook);
        }
    }

    removeBook(book) {
        if(this.isIn(book)) {
            
        }
    }

    isIn(newBook) {
        return this.library.some(book => book.title === newBook.title);
    }
}