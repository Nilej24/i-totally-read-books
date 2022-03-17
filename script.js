const library = document.querySelector(".library");
const addBookButton = document.querySelector(".add-book");

let books = [];

function Book(name, author, pages, finished) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.finished = finished;
}

function addBook(name, author, pages, finished) {
  books.push(new Book(name, author, pages, finished));
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

    // this top row thing is for styling
    const top = document.createElement("div");
    top.classList.add("book-top");

      const name = document.createElement("h3");
      name.textContent = book.name;

      const closeButton = document.createElement("div");
      closeButton.classList.add("remove-book");
      closeButton.textContent = "x";

    top.append(name, closeButton);
    // end of top row

    const author = document.createElement("h4");
    author.textContent = "by " + book.author;

    const pages = document.createElement("p");
    pages.textContent = book.pages + " pages";

    const finished = document.createElement("div");
    finished.classList.add("finished");
    finished.textContent = book.finished ? "finished" : "reading...";

    newBook.append(top, author, pages, finished);
    library.insertBefore(newBook, library.lastElementChild);
  });
}

addBook("Funny Book", "Hilarious Guy", 69, true);
addBook("Trash Book", "me", 400, false);
addBook("Trash Book", "me", 400, false);
addBook("Trash Book", "me", 400, false);
addBook("Trash Book", "me", 400, false);
addBook("Trash Book", "me", 400, false);
addBook("Trash Book", "me", 400, false);
addBook("Trash Book", "me", 400, false);
addBook("Trash Book", "me", 400, false);
displayCurrentBooks();
