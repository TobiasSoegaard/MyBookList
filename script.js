console.log("JavaScript is working!");

const removeButtons = document.querySelectorAll(".remove-button");
const addBookButton = document.querySelector("#add-book")
const bookList = document.querySelector(".book-list");

//remove buttons
removeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const book = button.parentElement;
        book.remove();
    });
});

//load more button
addBookButton.addEventListener("click", function() {

    const newBook = document.createElement("div");

    newBook.classList.add("book-entry");

    newBook.innerHTML = `
        <a href="read.html">
            <span class="book-number">4</span>
            <span class="book-title">Man's Search For Meaning</span>
        </a>

        <button class="remove-button">Remove</button>
    `;

    bookList.appendChild(newBook);

    //makes the new remove button work
    const newRemoveButton = newBook.querySelector(".remove-button");

    newRemoveButton.addEventListener("click", function(){
        newBook.remove();
        addBookButton.disabled = false;
    });

    //the new book can only be added once
    addBookButton.disabled = true;
});