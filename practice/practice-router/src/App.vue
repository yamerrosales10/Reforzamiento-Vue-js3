<template>
    <Header />
    <router-view />
    <Footer />
</template>
<script lang="ts">
import Footer from "./modules/web/layout/Footer.vue";
import Header from "./modules/web/layout/Header.vue";
export default {
    name: "App",
    components: {
        Footer,
        Header,
    },
};
</script>
