
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
            /// local Storage:
        console.log(response2.data[0]);
        localStorage.setItem("My Pokemon Foto : ", JSON.stringify(response2.data[0].images.small));

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





        /// inputEvent  and use Api Key  ve arama esnasinda * kullanimi
        // * kullandigimizda yazdigimiz harf ile baslayan t??m isimleri getirir
        // bu api ye ait bir ??zellik

    const API_KEY = "73b1e413-cc79-494d-9972-9ea097005455";

    inputName.addEventListener("input", async (e) => {
        let name = e.target.value;
        let response = await axios(`https://api.pokemontcg.io/v2/cards/?q=name:${name}*`,
        {
            header : {
                "X-Api-Key" : API_KEY
            }
        });

        fotoList.innerHTML = "";

        if (response.data.data) {
            response.data.data.forEach((item) => {
                let url = (item.images.small);
                let newLi = document.createElement("li");
                newLi.innerHTML = `<img src="${url}" alt="">`;
                fotoList.prepend(newLi);
            })
        }
    });




            //// local storage dan veri cekme:
            //// JSON.strinify ile JSON.parse kullanimi farkli  DIKKAT:

    let fromLocalStorage = localStorage.getItem("My Pokemon Foto : ");
    let fromLocalStorage2 = JSON.parse(localStorage.getItem("My Pokemon Foto : "));
    console.log(fromLocalStorage);
    console.log(fromLocalStorage2);

            /// output olarak da parse edilmis veri string icinde olmuyor. parse edilmedi ise console da string icinde oluyor.
        