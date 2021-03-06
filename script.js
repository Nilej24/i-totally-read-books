const library = document.querySelector(".library");
const addBookButton = document.querySelector(".add-book");

// form elements
const addBookForm = document.querySelector("form");
const closeFormButton = document.querySelector(".close-form");
const nameField = document.querySelector("#name");
const authorField = document.querySelector("#author");
const pagesField = document.querySelector("#pages");
const finishedField = document.querySelector("#finished");
const submitButton = document.querySelector(".submit");

let books = [];

class Book {
  constructor(name, author, pages, finished) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.finished = finished;
  }

  changeStatus() {
    this.finished = !this.finished;
  }
}

// for opening the 'add book' form
addBookButton.addEventListener("click", function (ev) {
  addBookForm.classList.remove("hidden");
  nameField.focus();
});

// for closing the form
closeFormButton.addEventListener("click", closeForm);
window.addEventListener("keydown", function (ev) {
  if(ev.keyCode == 27) // esc
    closeForm();
});
function closeForm() {
  addBookForm.classList.add("hidden");
}

// adds a book to the array
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

// function for 'x' button on each book
// removes the correct book from the array, then reloads books
function removeBook(ev) {
  books.splice(ev.target.parentElement.parentElement.dataset.bookIndex, 1);
  displayCurrentBooks();
}

// refreshes screen with current books
function displayCurrentBooks() {

  removeDisplayedBooks();

  // add current books back to the page
  for(let i = 0; i < books.length; i++) {
    const book = books[i];

    // this top row thing is for styling
    const top = document.createElement("div");
    top.classList.add("book-top");

    const name = document.createElement("h3");
    name.textContent = book.name;

    const closeButton = document.createElement("div");
    closeButton.classList.add("remove-book", "grey-on-hover");
    closeButton.textContent = "x";
    closeButton.addEventListener("click", removeBook);

    top.append(name, closeButton);
    // end of top row

    const author = document.createElement("h4");
    author.textContent = "by " + book.author;

    const pages = document.createElement("p");
    pages.textContent = book.pages + " pages";

    const finished = document.createElement("div");
    finished.classList.add("finished", "grey-on-hover");
    finished.textContent = book.finished ? "finished" : "reading...";
    finished.addEventListener("click", function () {
      books[i].changeStatus();
      displayCurrentBooks();
    });

    const newBook = document.createElement("li");
    newBook.classList.add("book");
    newBook.dataset.bookIndex = i; // for editing / removing books
    newBook.append(top, author, pages, finished);
    library.insertBefore(newBook, library.lastElementChild);
  }
}

// submitting the form to add books
addBookForm.addEventListener("submit",  submitForm);
function submitForm(ev) {
  ev.preventDefault();
  const name = nameField.value;
  const author = authorField.value;
  const pages = pagesField.value;
  const finished = finishedField.checked;

  addBook(name, author, pages, finished);
  displayCurrentBooks();
}
 
addBook("Funny Book1", "Hilarious Guy", 69, true);
addBook("Trash Book2", "me", 400, false);
addBook("Trash Book3", "me", 400, false);
addBook("Trash Book4", "me", 400, false);
addBook("Trash Book5", "me", 400, false);
addBook("Trash Book6", "me", 400, false);
addBook("Trash Book7", "me", 400, false);
addBook("Trash Book8", "me", 400, false);
addBook("Trash Book9", "me", 400, false);
displayCurrentBooks();
