
let inputId = document.getElementById("input-id");
let inputName = document.getElementById("input-name");
let buttonId = document.querySelector(".button-id");
let buttonName = document.querySelector(".button-name");

let cardsDiv = document.querySelector(".cards-div");
let fotoList = document.querySelector(".foto-list");


    // all cards:
    // fetch then
// fetch("https://api.pokemontcg.io/v2/cards").then((response) => {
//     return response.json();
// }) .then(function(data) {
//     console.log(data);
// }) .catch(function(error) {
//     console.log(error);
// });


        /// async func:

    let getCard = async () => {
        let response = await fetch("https://api.pokemontcg.io/v2/cards");
        let response2 = await response.json();
        console.log(response2.data[0]);

            // destructure:
        // let {data, page, count, pageSize, totalCount} = response2;
        // console.log(data);
        // console.log(page);
        // console.log(count);
        // console.log(pageSize);
        // console.log(totalCount);

        let firstPokemonId = response2.data[0].id;
        console.log(firstPokemonId);

    };
    // getCard();



        /// get card with id:

    async function getPokemonById(pokemonId) {
        let response = await fetch(`https://api.pokemontcg.io/v2/cards/?q=id:${pokemonId}`);
        let response2 = await response.json();
        
        let {images : {small : fotoUrl}} = response2.data[0];
        // console.log(fotoUrl);
      
        cardsDiv.innerHTML += `
        <img src="${fotoUrl} " alt="">
        `
    };
    // getPokemonById("pl3-1");
    // getPokemonById("xy5-1");






            /// get card by Name:

    // let getCardByName = async function(name) {
    //     let response = await axios(`https://api.pokemontcg.io/v2/cards/?q=name:${name}`);
    //     console.log(response);
    // };

    // getCardByName("Absol");
    // getCardByName("Alakazam");
    // getCardByName("Pikachu");





    ///////////////////////
    /// buttonId addevent:

    buttonId.addEventListener("click", async (e) => {
        let id = inputId.value;
        buttonIdFunc(id);
    });

    async function buttonIdFunc(PokeId) {
        let response = await fetch(`https://api.pokemontcg.io/v2/cards/?q=id:${PokeId}`);
        let response2 = await response.json();
        let url = response2.data[0].images.small;
        cardsDiv.innerHTML += `
        <img src="${url}" alt="pokemon">
        `
    };




    ////////////// buttonName addevent:

    buttonName.addEventListener("click", (e) => {
        let name = inputName.value;
        buttonNameFunc(name);
    });

    let buttonNameFunc = async function(PokeName) {
        let response = await fetch(`https://api.pokemontcg.io/v2/cards/?q=name:${PokeName}`);
        let response2 = await response.json();
        
        response2.data.forEach(async (item) => {
            let {images : {small : url}} = item;
                /// 2. method:
            // cardsDiv.innerHTML += `
            // <img src="${url}" alt="pokemon">
            // `

            let newFoto = document.createElement("li");
            newFoto.innerHTML = `<img src="${url}" alt="pokemon">`;
            // fotoList.append(newFoto);
            fotoList.prepend(newFoto);
        })
    };








        /// inputEvent:

        


 