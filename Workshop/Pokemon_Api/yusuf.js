const bringPokemonById = document.querySelector(".get-pokemon-id");
const inputId = document.querySelector(".user-input-id");

const bringPokemonByName = document.querySelector(".get-pokemon");
const inputName = document.querySelector(".user-input");

const imageGallery = document.querySelector(".image-gallery");

const API_KEY = "73b1e413-cc79-494d-9972-9ea097005455";


const getPokemonById = async () => {
    const pokemonId = inputId.value; 
    const response = await fetch(`https://api.pokemontcg.io/v2/cards/${pokemonId}`, 
    {
        header: {
            "X-Api-Key" : API_KEY
        }
    });
    const pokemon = await response.json()

    
}


bringPokemonById.addEventListener("click", getPokemonById);




/// name ile:

const getPokemonByName = async () => {
    const pokemonName = inputName.value; 
    // const response = await fetch(`https://api.pokemontcg.io/v2/cards/?q=name:${pokemonName}`);
    const response = await fetch(`https://api.pokemontcg.io/v2/cards/?q=name:${pokemonName}*`);
    const pokemon = await response.json()

    let anyPokemon = pokemon.data[0];
    localStorage.setItem("myCharizard", JSON.stringify(anyPokemon));

    // const imageUrl = pokemon.data[0].images.small;
    // imageGallery.innerHTML += `<img src='${imageUrl}' />`
    // imageGallery.innerHTML = "";
    // pokemon.data.forEach((pokeCard) => {
    //     let url = pokeCard.images.small;
    //     imageGallery.innerHTML += `<img src='${url}'/>`
    // })
    
}


bringPokemonByName.addEventListener("click", getPokemonByName);


// inputName.addEventListener("input", async (e) => {
//     console.log(e.target.value)

//     const response = await fetch(
//         `https://api.pokemontcg.io/v2/cards/?q=name:${e.target.value}*`,
//         {
//             headers: {
//                 "X-Api-Key": API_KEY,
//             },
//         }
//     );
//     const pokemon = await response.json();
    
//     imageGallery.innerHTML = "";
//     // pokemon.data.forEach((pokeCard) => {
//     //     let url = pokeCard.images.small;
//     //     imageGallery.innerHTML += `<img src='${url}' />`;
//     // });
 
// })


let myPokemon = JSON.parse(localStorage.getItem("myCharizard"));

console.log(myPokemon);


















/// isimleri dropdown yap. kullanici ne secerse o veriler gelsin.