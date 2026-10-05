console.log("JavaScript is working!");

const removeButtons = document.querySelectorAll(".remove-button");

removeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const book = button.parentElement;
        book.remove();
    });
});