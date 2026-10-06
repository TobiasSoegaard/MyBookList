console.log("JavaScript is working!");

const removeButtons = document.querySelectorAll(".remove-button");
const addBookButton = document.querySelector("#add-book");
const bookList = document.querySelector(".book-list");
const bookform = document.querySelector("#book-form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const score = document.querySelector("#score");
const setStatus = document.querySelector("#status");
const review = document.querySelector("#review");

const validStatuses = [
    "reading",
    "completed",
    "planned",
    "dropped",
    "onhold"
];

//remove buttons
if(removeButtons){
    removeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const book = button.parentElement;
            book.remove();
        });
    });
}

//load more button
if(addBookButton){
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
}

//Form validation
if(bookform){
    bookform.addEventListener("submit", function(event){
        const scoreValue = Number(score.value);

        if (title.value.trim() === ""){
            event.preventDefault();
            alert("Please enter a title");
            return;
        }

        if (author.value.trim() === ""){
            event.preventDefault();
            alert("please insert an author");
            return;
        }

        if(scoreValue < 1 || scoreValue > 10){
            event.preventDefault();
            alert("Score must be between 1 and 10.");
            return;
        }

        if(!validStatuses.includes(setStatus.value)){
            event.preventDefault();
            alert("please select a valid status");
            return;
        }
    });
}