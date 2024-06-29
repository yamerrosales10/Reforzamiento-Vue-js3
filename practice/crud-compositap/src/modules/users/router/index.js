import MainPage from "../pages/MainPage.vue";
import CreatePage from "../pages/CreatePage.vue";
export const usersRoutes = [
    { path: "", name: "users-main-page", component: MainPage },
    { path: "create", name: "users-create-page", component: CreatePage },
];
