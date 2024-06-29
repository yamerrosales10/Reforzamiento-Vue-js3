import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "~/pages/HomePage.vue";
import { dayBookRoutes } from "../modules/daybook/router";
const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    { path: "/daybook", ...dayBookRoutes },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
