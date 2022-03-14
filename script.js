const library = document.querySelector(".library");

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

function displayCurrentBooks() {
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
    library.append(newBook);
  });
}

addBook("Funny Book", "Hilarious Guy", 69, true);
displayCurrentBooks();
