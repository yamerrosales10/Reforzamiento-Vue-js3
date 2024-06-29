<template>
    <h1>Pokemon Page</h1>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </div>
</template>

<script lang="ts">
export default {
    name: "PokemonPage",
    components: {},
    props: {
        id: { type: Number, required: true },
    },
    data() {
        return {
            // id: this.$route.params.id,
            pokemon: null,
        };
    },
    created() {
        // console.log(this.$route.params); // que viene de la url
        // console.log(this.$attrs); // los props que viene del router en router.ts
        // const { id = 10 } = this.$route.params;
        // this.id = id;
        this.getPokemonById();
    },
    methods: {
        async getPokemonById() {
            try {
                const pokemon = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${this.id}`
                );
                const resultado = await pokemon.json();
                this.pokemon = resultado;
            } catch (error) {
                this.$router.push("/");
                console.log("noep");
            }
        },
    },
    watch: {
        id(_old, _new) {
            this.getPokemonById();
        },
    },
};
</script>
