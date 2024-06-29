<template>
    <div class="flex gap-2">
        <!-- <router-link
            class="font-bold tew"
            active-class="text-red-600"
            :to="{ name: 'home' }"
            >Pokemon List</router-link
        >
        <router-link
            class="font-bold tew"
            active-class="text-red-600"
            :to="{ name: 'about' }"
            >About</router-link
        >
        <router-link
            class="font-bold tew"
            active-class="text-red-600"
            :to="{ name: 'pokemon-id', params: { id: 100 } }"
            >Pokemon por Id</router-link
        > -->
        <CustomLink v-for="link in links" :key="link.to" :link="link" />
    </div>
</template>
<script lang="ts">
import CustomLink from "./CustomLink.vue";

export default {
    name: "Navbar",
    data() {
        return {
            links: [
                { to: "/", name: "Pokemons" },
                { to: "/50", name: "Por Id" },
                { to: "http://www.google.com", name: "google" },
            ],
        };
    },
    components: {
        CustomLink,
    },
};
</script>
