import { createRouter, createWebHashHistory } from "vue-router";
import { usersRoutes } from "../modules/users/router";
import { webRoutes } from "../modules/web/router";
import WebLayout from "../modules/web/layouts/WebLayout.vue";

const routes = [
    {
        path: "/",
        component: WebLayout,
        children: [...webRoutes, { path: "/users", children: usersRoutes }],
    },
    ,
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
