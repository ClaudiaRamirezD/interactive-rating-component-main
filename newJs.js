// 1. Grab our items

let numberContainer = document.querySelector(".rating");
let ratingBox = document.querySelector("#rating-box");
let submitBtn = document.querySelector(".btn");
let mainCard = document.querySelector(".main-card");
let thanksCard = document.querySelector(".card-thanks");


// 2. Add event listeners to our items that handle an item click.

numberContainer.addEventListener("click", (e) => {
  let numberSelected = e.target.innerText;
  ratingBox.innerText = numberSelected;
});

submitBtn.addEventListener("click", () => {
    mainCard.style.display = "none";
    thanksCard.style.display = "flex";
});


