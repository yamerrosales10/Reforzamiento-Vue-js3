<template>
    <Header />
    <router-view v-slot="{ Component, route }">
        <keep-alive>
            <component :is="Component" :key="route.name" />
        </keep-alive>
    </router-view>
    <Footer />
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
    components: {
        Header,
        Footer,
    },
};
</script>
