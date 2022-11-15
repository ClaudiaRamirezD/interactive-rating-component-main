// Order of code steps:

// 1. Grab our items

const ratingBox = document.getElementById("rating-box");
const ratings = document.querySelectorAll(".numbers");
const submit = document.querySelector(".btn-submit");

// 2. Add event listeners to our items that handle an item click.

ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
        let storedValue = rating.innerHTML;
        localStorage.setItem("rate", storedValue);
        console.log(storedValue);   
    })
    
})






// 3. HandleItemClick function ->
// 3.1 Grab the clicked item
// 3.2 Grab the itemDetail as we need to add maxHeight
// 3.3 Check if the item has .active class
// 3.4 If it does, remove the maxHeight and remove the .active class
// 3.5 If it doesnt, add the maxHeight and add the .active class 