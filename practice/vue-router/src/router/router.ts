import { RouterOptions, createRouter, createWebHashHistory } from "vue-router";
import ListPage from "../modules/pokemon/pages/ListPage.vue";
import PokemonPage from "../modules/pokemon/pages/PokemonPage.vue";
import NoPageFound from "../modules/shared/pages/NoPageFound.vue";

const routes: RouterOptions["routes"] = [
    { path: "/", name: "home", component: ListPage },

    {
        path: "/pokemon",
        component: () => import("../modules/pokemon/layouts/PokemonLayout.vue"),
        name: "pokemon",
        children: [
            {
                path: "/about",
                name: "about",
                component: () =>
                    import("../modules/pokemon/pages/AboutPage.vue"),
            },
            {
                path: "/pokemonId/:id",
                name: "pokemon-id",
                component: PokemonPage,
                props: (route) => {
                    const { id } = route.params;
                    return {
                        id: Number(id),
                    };
                },
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        component: NoPageFound,
        name: "404",
        // redirect: "/",
    },
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});
export default router;
