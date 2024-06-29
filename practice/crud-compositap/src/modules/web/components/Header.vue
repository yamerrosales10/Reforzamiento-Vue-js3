<template>
    <header class="bg-gray-700 shadow">
        <div
            class="container mx-auto py-4 px-2 flex items-center justify-between"
        >
            <h1 class="text-2xl text-white uppercase font-bold">Logo</h1>
            <nav class="flex items-center gap-2">
                <router-link
                    v-for="navLink in navLinks"
                    :to="{ name: navLink.name }"
                    class="text-white"
                    active-class="text-blue-600"
                >
                    {{ navLink.title }}</router-link
                >
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    setup() {
        return {
            navLinks: [
                { name: "home-page", title: "Inicio" },
                { name: "nosotros-page", title: "Nosotros" },
                { name: "blog-page", title: "Blog" },
                { name: "users-main-page", title: "Users" },
            ],
        };
    },
};
</script>
