class book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

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

    // comprobamos el formulario
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    let newBook = new book(title, author, pages);

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
          <p class="book-pages">Pages: ${newBook.year}</p>
        </div>
        <div class="select-container">
          <select id="read-main" name="read">
            <option value="yes">To read</option>
                  <option value="reading">Currently reading</option>
                  <option value="completed">Completed</option>
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
