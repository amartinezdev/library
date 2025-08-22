class book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// Event listener for the book list
document.addEventListener("DOMContentLoaded", function () {
  const bookList = document.querySelector(".book-list");

  bookList.addEventListener("change", function (e) {
    const target = e.target;
    console.log("Change detected:", target.value);

    if (target.classList.contains("read-status") && target.value === "delete") {
      console.log("Delete option selected");
      const bookItem = target.closest(".book-item");
      if (bookItem) {
        bookItem.remove();
      }
    }
  });
});

function openForm() {
  let dialog = document.getElementById("myDialog");
  let closeDialog = document.getElementById("closeBtn");
  let submit = document.getElementById("submitBtn");

  dialog.showModal();

  closeDialog.onclick = () => {
    dialog.close();
  };

  submit.onclick = (e) => {
    e.preventDefault();

    const form = document.getElementById("bookForm");

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;

    let newBook = new book(title, author, pages, read);

    let bookItem = document.createElement("div");
    let bookList = document.getElementsByClassName("book-list")[0];

    bookItem.setAttribute("class", "book-item");

    bookItem.innerHTML = `
      <header class="book-header">
        <h2 class="book-title">${newBook.title}</h2>
      </header>
      <section class="book-details">
        <div class="book-info">
          <p class="book-author">Author: ${newBook.author}</p>
          <p class="book-pages">Pages: ${newBook.pages}</p>
        </div>
        <div class="select-container">
          <select class="read-status" name="read">
            <option value="yes" ${read === "yes" ? "selected" : ""}>To read</option>
            <option value="reading" ${read === "reading" ? "selected" : ""}>Currently reading</option>
            <option value="completed" ${read === "completed" ? "selected" : ""}>Completed</option>
            <option value="delete">Delete</option>
          </select>
        </div>
      </section>
    `;

    bookList.appendChild(bookItem);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";

    dialog.close();
  };
}
