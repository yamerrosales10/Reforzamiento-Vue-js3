<template>
    <h1>¿Quien es este pokemon?</h1>
    <PokemonPicture :pokemonId="5" :showPokemon="true" />
    <PokemonOptions :pokemons="pokemonArr" />
</template>

<script>
import PokemonPicture from "../components/PokemonPicture.vue";
import PokemonOptions from "../components/PokemonOptions.vue";
import getPokemonsOptions from "../helpers/getPokemonOptions";

console.log(getPokemonsOptions());
export default {
    components: {
        PokemonPicture,
        PokemonOptions,
    },
    data() {
        return {
            pokemonArr: [],
        };
    },
    methods: {},
};
</script>

<style></style>
