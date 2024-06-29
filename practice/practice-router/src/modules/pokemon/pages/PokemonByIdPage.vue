<template>
    <p v-if="isLoading">Cargando...</p>
    <div v-else="isLoading">
        <p>{{ pokemon.name }}</p>
        <p>{{ pokemon.abilities }}</p>
        <p>
            Height: <b>{{ pokemon.height }}</b> weight:
            <b>{{ pokemon.weight }}</b>
        </p>
        <img :src="pokemon.sprites.front_default" alt="" />
    </div>
</template>
<script>
import { BASE_URL } from "../../../utils/axios";
export default {
    data() {
        return {
            pokemon: null,
            isLoading: true,
        };
    },
    props: {
        id: {
            required: true,
            type: Number,
        },
    },
    created() {
        this.fetchPokemonByID();
    },
    methods: {
        async fetchPokemonByID() {
            const { data } = await BASE_URL.get(`/pokemon/${this.id}`);
            console.log(data);
            this.isLoading = false;
            this.pokemon = data;
        },
    },
};
</script>
