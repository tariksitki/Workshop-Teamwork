
let container = document.querySelector(".container");
let headerBtn = document.querySelector(".headerBtn");
let box1Btn = document.querySelector(".box1Btn");
let box2Btn = document.querySelector(".box2Btn");
let box3Btn = document.querySelector(".box3Btn");
let sidebarBtn = document.querySelector(".sidebarBtn");
let mainBtn = document.querySelector(".mainBtn");
let footerBtn = document.querySelector(".footerBtn");

headerBtn.addEventListener("click", () => {
   
    if (!container.innerHTML.includes(`<div class="box box1">Header</div>`)) {
        container.innerHTML += `<div class="box box1">Header</div>`;
    }   else {
        let header = document.querySelector(".box1");
        header.remove();
    }

})  


box1Btn.addEventListener("click", () => {
    if (!container.innerHTML.includes(`<div class="box box2">Box 1</div>`)) {
        container.innerHTML += `<div class="box box2">Box 1</div>`;
    } else {
        let box1 = document.querySelector(".box2");
        box1.remove();
    }
})


box2Btn.addEventListener("click", () => {
    if (!container.innerHTML.includes(`<div class="box box3">Box 2</div>`)) {
        container.innerHTML += `<div class="box box3">Box 2</div>`;
    } else {
        let box2 = document.querySelector(".box3");
        box2.remove();
    }
})


box3Btn.addEventListener("click", () => {
    if (!container.innerHTML.includes(`<div class="box box4">Box 3</div>`)) {
        container.innerHTML += `<div class="box box4">Box 3</div>`;
    } else {
        let box3 = document.querySelector(".box4");
        box3.remove();
    }
})


sidebarBtn.addEventListener("click", () => {
    if (!container.innerHTML.includes(`<div class="box box5">Sidebar</div>`)) {
        container.innerHTML += `<div class="box box5">Sidebar</div>`;
    } else {
        let sidebar = document.querySelector(".box5");
        sidebar.remove();
    }
})


mainBtn.addEventListener("click", () => {
    if (!container.innerHTML.includes(`<div class="box box6">Main</div>`)) {
        container.innerHTML += `<div class="box box6">Main</div>`;
    } else {
        let main = document.querySelector(".box6");
        main.remove();
    }
})


footerBtn.addEventListener("click", () => {
    if (!container.innerHTML.includes(`<div class="box box7">Footer</div>`)) {
        container.innerHTML += `<div class="box box7">Footer</div>`;
    } else {
        let footer = document.querySelector(".box7");
        footer.remove();
    }
})
