const library = document.querySelector(".library");
const addBookButton = document.querySelector(".add-book");

let books = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(name, author, pages, read) {
  books.push(new Book(name, author, pages, read));
}

// removes all books from the screen
function removeDisplayedBooks() {

  const dBooks = [...library.children];

  dBooks.forEach(function (book) {
    // so the 'add book' button doesn't get deleted
    if(book.classList.contains("book"))
      book.remove();
  });
}

// refreshes screen with current books
function displayCurrentBooks() {

  removeDisplayedBooks();

  // add current books back to the page
  books.forEach(function (book) {
    const newBook = document.createElement("li");
    newBook.classList.add("book");

    const name = document.createElement("h3");
    name.textContent = book.name;

    const author = document.createElement("h4");
    author.textContent = "by " + book.author;

    const pages = document.createElement("p");
    pages.textContent = book.pages + " pages";

    const read = document.createElement("div");
    read.textContent = book.read ? "finished" : "reading...";

    newBook.append(name, author, pages, read);
    library.insertBefore(newBook, library.lastElementChild);
  });
}

addBook("Funny Book", "Hilarious Guy", 69, true);
addBook("Trash Book", "me", 400, false);
displayCurrentBooks();
