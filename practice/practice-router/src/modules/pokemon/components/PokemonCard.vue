<template>
    <router-link
        :to="{
            name: 'PokemonByIdPage',
            params: {
                id: indice + 1,
            },
        }"
        class=""
    >
        <picture>
            <img
                :src="
                    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
                    2 +
                    '.png'
                "
                width="150"
                alt=""
            />
        </picture>
        <p class="text-center font-bold">{{ data.name }}</p>
    </router-link>
</template>

<script>
export default {
    props: {
        data: {
            required: true,
        },
        indice: {
            required: true,
            type: Number,
        },
    },
};
</script>
