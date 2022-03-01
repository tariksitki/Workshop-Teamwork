

let container = document.querySelector(".container");

// function clear() {
    
        
// }
// }



function gridMaker() {
    setTimeout(() => {
        container.innerHTML += `
    <div class="box box1">Header</div>`
    }, 1000);
    
    setTimeout(() => {
        container.innerHTML += `
        <div class="box box2">Box1</div>`
    }, 2000);
    
    setTimeout(() => {
        container.innerHTML += `
        <div class="box box3">Box2</div>`
    }, 3000);

    setTimeout(() => {
        container.innerHTML += `
        <div class="box box4">Box3</div>`
    }, 4000);

    setTimeout(() => {
        container.innerHTML += `
        <div class="box box5">Sidebar</div>`
    }, 5000);

    setTimeout(() => {
        container.innerHTML += `
        <div class="box box6">Main</div>`
    }, 6000);

    setTimeout(() => {
        container.innerHTML += `
        <div class="box box7">Footer</div>`
    }, 7000);

    
    setTimeout(() => {
        let footer = document.querySelector(".box7");
        footer.remove();
    }, 8000)

    setTimeout(() => {
        let box6 = document.querySelector(".box6");
        box6.remove();
    }, 9000)

    setTimeout(() => {
        let box5 = document.querySelector(".box5");
        box5.remove();
    }, 10000)

    setTimeout(() => {
        let box4 = document.querySelector(".box4");
        box4.remove();
    }, 11000)

    setTimeout(() => {
        let box3 = document.querySelector(".box3");
        box3.remove();
    }, 12000)

    setTimeout(() => {
        let box2 = document.querySelector(".box2");
        box2.remove();
    }, 13000)

    setTimeout(() => {
        let box1 = document.querySelector(".box1");
        box1.remove();
    }, 14000)


}
gridMaker()



