<template>
    <header class="py-4 bg-slate-900 text-white">
        <div class="mx-auto container flex items-center justify-between">
            <router-link
                :to="{ name: 'HomePage' }"
                class="text-2xl uppercase font-bold"
                >Logo</router-link
            >
            <nav class="flex items-center gap-3">
                <router-link :to="navItem.path" v-for="navItem in navItems">{{
                    navItem.title
                }}</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            navItems: [
                { path: "/", title: "Inicio" },
                { path: "/blog", title: "blog" },
            ],
        };
    },
};
</script>
