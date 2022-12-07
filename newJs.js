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

let elements = document.getElementsByClassName("label");
for (let i = 0; i < elements.length; i++) {
   
   elements[i].onclick = function () {
     // remove class from sibling

     let el = elements[0];
     console.log(el);
     while (el) {
       if (el.tagName === "LABEL") {
         //remove class
         el.classList.remove("active");
       }
       // pass to the new sibling
       el = el.nextSibling;
     }

     this.classList.add("active");
   };
 }