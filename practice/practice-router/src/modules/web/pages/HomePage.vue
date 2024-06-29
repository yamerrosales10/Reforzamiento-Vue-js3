<template>
    <h2 class="text-center">HomePage</h2>
    <div class="flex gap-2 items-center flex-wrap justify-center">
        <PokemonCard
            v-for="(pokemon, key) in pokemons"
            :data="pokemon"
            :key="key"
            :indice="key"
        />
    </div>
</template>
<script>
import { BASE_URL } from "../../../utils/axios";
import PokemonCard from "../../pokemon/components/PokemonCard.vue";

export default {
    name: "HomePage",
    components: { PokemonCard },
    data() {
        return {
            pokemons: null,
        };
    },
    created() {
        this.fetchPokemons();
    },
    methods: {
        async fetchPokemons() {
            const { data } = await BASE_URL.get("/pokemon");
            this.pokemons = data.results;
        },
    },
};
</script>
