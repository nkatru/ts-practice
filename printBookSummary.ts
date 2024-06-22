import Book from './Book';
import ElectronicBook from './ElectronicBook';

const book = new Book('Harry Potter', 'J.K. Rowling', 1997);
console.log(book.getSummary());

const eBook = new ElectronicBook('Harry Potter', 'J.K. Rowling', 1997, 'PDF');
console.log(eBook.getSummary());
