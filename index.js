
document.addEventListener('DOMContentLoaded', (event) => {
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');
    const clearAllButton = document.getElementById('clearAll');

    let books = [];

    bookForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const genre = document.getElementById('genre').value;
        const year = document.getElementById('year').value;
        const quantity = document.getElementById('quantity').value;

        const book = { title, author, genre, year, quantity };
        books.push(book);
        
        addBookToTable(book);
        bookForm.reset();
    });

    clearAllButton.addEventListener('click', function () {
        books = [];
        bookList.innerHTML = '';
    });

    function addBookToTable(book) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.year}</td>
            <td>${book.quantity}</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeBook(this)">Remove</button></td>
        `;

        bookList.appendChild(row);
    }

    window.removeBook = function(button) {
        const row = button.parentElement.parentElement;
        const title = row.cells[0].innerText;

        books = books.filter(book => book.title !== title);
        row.remove();
    };
});
 
do