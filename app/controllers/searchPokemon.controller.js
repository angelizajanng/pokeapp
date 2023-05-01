
const form = document.querySelector("form");
const input = form.querySelector("input");
const pokemonError = document.querySelector(".pokemon_error");
const pokemonInfo = document.querySelector(".pokemon_info");
const loading = document.querySelector(".loading")
const url = "https://pokeapi.co/api/v2/pokemon/";
const abilityUrl = "https://pokeapi.co/api/v2/ability/";

/**
 * 
**/


export const searchPokemonController = () => {
        form.addEventListener("submit", async (ev) => {
                 // Para evitar que no aparezca y desaparezca en consola tan rapido que no se vea
                ev.preventDefault();
                renderError();
                
                // Pintado del texto introducido
                const inputValue = input.value;
                const inputLenth = inputValue.length;

                if (inputLenth >= 1) {
                        // pintar la url
                        const fectchUrl = url + inputValue;
                        // buscar los resultados en el json de los pokemons
                        const pokemonResponse = await fetch(fectchUrl).then((res) => res.json());
                        renderPokemon(pokemonResponse);
                        console.log(pokemonResponse);
                        setLoadingOff();
                        resetErrors();
                } else {
                        setLoadingOff();
                        resetErrors();
                }
                // Para resetear el formulario
                form.reset();
        })
};


/**
 * 
**/
const resetErrors = () => {
        pokemonError.innerHTML = ``;
};



/**
 * 
**/
const renderError = () => {
        pokemonError.innerHTML = ` 
        <div class="pokemon_error_container">
                <h1>No se ha encontrado el pokemon "${input.value}"</h1>
        </div>`;
};



/**
 * 
**/
const renderPokemon = (pokemon) => {
        // renderizar html dinámico de los datos del pokemon
        pokemonInfo.innerHTML = `
        <div class="container_poke">
                <div class="container_info">

                        <div class="line"></div>

                        <div class="poke_info_datos">
                                <h3>${pokemon.name}</h3>
                                <h4>EXP: ${pokemon.base_experience}</h4>
                                <h4>Tipo: ${pokemon.types[0].type.name}</h4>
                                <h4>Peso: ${pokemon.weight}</h4>
                        </div>

                        <div class="poke_varios"> 
                                <div class="poke_info_abilities">
                                        <div class="poke_info_ability">Habilidades</div>
                                        ${pokemon.abilities.reduce((acc, ability) => acc + `
                                        <div class="poke_info_ability">${ability.ability.name}</div>
                                        ` , "")}
                                </div>

                                <div class="poke_info_stats">
                                        <div class="poke_info_stat">Stats</div>
                                        <div class="poke_info_stat">${pokemon.stats[0].stat.name} : ${pokemon.stats[0].base_stat}</div>
                                        <div class="poke_info_stat">${pokemon.stats[1].stat.name} : ${pokemon.stats[1].base_stat}</div>
                                        <div class="poke_info_stat">${pokemon.stats[2].stat.name} : ${pokemon.stats[2].base_stat}</div>
                                        <div class="poke_info_stat">${pokemon.stats[3].stat.name} : ${pokemon.stats[3].base_stat}</div>
                                        <div class="poke_info_stat">${pokemon.stats[4].stat.name} : ${pokemon.stats[4].base_stat}</div>
                                        <div class="poke_info_stat">${pokemon.stats[5].stat.name} : ${pokemon.stats[5].base_stat}</div>
                                </div>

                                <div class="poke_info_moves">
                                        <div class="poke_info_move">Moves</div>
                                        <div class="poke_info_move">${pokemon.moves[0].move.name}</div>
                                        <div class="poke_info_move">${pokemon.moves[1].move.name}</div>
                                        <div class="poke_info_move">${pokemon.moves[2].move.name}</div>
                                        <div class="poke_info_move">${pokemon.moves[3].move.name}</div>
                                        <div class="poke_info_move">${pokemon.moves[4].move.name}</div>
                                </div>
                        </div>
                </div>

                <div class="poke_info_picture">
                        <img src="${pokemon.sprites.other.home.front_default} "alt="${pokemon.species.name}">
                        <div class="poke_number">#${pokemon.id}</div>
                        <div class="img_container"></div>
                        <div class="img_container_2"></div>
                </div>
        </div>
        `;
        initAbilitiesEvent();
        initPictureEvent();
        setLoadingOff();
};

/**
 * 
**/
// para hacer una precarga dela imagen
const initPictureEvent = () => {
        const picture = pokemonInfo.querySelector("img")
        picture.addEventListener("load", () => {
                console.log("imagen cargada");
        })
};


/**
 * 
**/
const initAbilitiesEvent = () => {
        const abilitiesBlocks = document.querySelectorAll(".poke_info_ability");
        abilitiesBlocks.forEach(abilitiesBlock => {
                abilitiesBlock.addEventListener("click", async (ev) => {
                        setLoadingOn();
                        const abilityName = abilitiesBlock.innerHTML
                        const abilityInfo = await fetch(abilityUrl + abilityName).then((res) => res.json());
                        console.log(abilityInfo);
                        setLoadingOff();
                });
        });
};



/**
 * 
**/
const setLoadingOn = () => {
        loading.classList.add("opened");
};


/**
 * 
**/
const setLoadingOff = () => {
        loading.classList.remove("opened");
};
