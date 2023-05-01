import "./../assets/styles/style.sass";

import { searchPokemonController } from './controllers/searchPokemon.controller'
// import { typeFilter } from './controllers/filterTypes.controller'

window.addEventListener("load", () => {
  searchPokemonController()
//   typeFilter()
})

