const tipos = document.querySelectorAll(".tipo")
const typeUrl = "https://pokeapi.co/api/v2/type/";


export const typeFilter = () => {
        for (const tipo of tipos)
        tipo.addEventListener("click", async (ev) =>{
                console.log(tipo);
                const fetchUrl = typeUrl + tipo.innerHTML
                const pokemonResponse = await fetch(fectchUrl).then(res => res.json())
                const randomHumber = getRandomNumber()
                const randomPokemonUrl = pokemonResponse.pokemon[randomNumber].pokemon
                console.log(randomPokemonUrl);

                const pokemon = await fetch(randomPokemonUrl).then(res => res.json())
                renderPokemon(pokemon)
                setLoadingOff()
        })
};

const getRandomNumber = () => {
        for (let i = 0; i < 10; i++) {
                const randomNumber = Math.floor(Math.random() * 100) + 1;
                return randomNumber
        }
};