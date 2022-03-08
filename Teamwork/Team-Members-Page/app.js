
let Myswitch = document.querySelector("#switch");
let container = document.querySelector(".container");
let cards = document.querySelectorAll(".card");

Myswitch.addEventListener("change", (e) => {
    if (Myswitch.checked) {
        container.className = "container h-100 w-75 mt-2 bg-dark rounded-3 text-white";
        cards.forEach((card) => {
            card.className = "card bg-dark border-0 ms-5";
        });
    }   else {
        container.className = "container h-100 w-75 mt-2 bg-light rounded-3";
        cards.forEach((card) => {
            card.className = "card bg-light border-0 ms-5";
        });
    }
})


