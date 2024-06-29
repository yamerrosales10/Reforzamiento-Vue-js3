import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";
import HomePage from "../modules/web/pages/HomePage.vue";
import BlogPage from "../modules/web/pages/BlogPage.vue";
import PokemonByIdPage from "../modules/pokemon/pages/PokemonByIdPage.vue";
const routes = [
    { path: "/", name: "HomePage", component: HomePage },
    { path: "/blog", name: "BlogPage", component: BlogPage },
    {
        path: "/pokemon/:id",
        name: "PokemonByIdPage",
        component: PokemonByIdPage,
        props: (route) => {
            return {
                id: Number(route.params.id),
            };
        },
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});
