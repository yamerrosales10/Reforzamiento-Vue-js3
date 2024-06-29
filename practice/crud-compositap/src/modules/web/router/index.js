import BlogPage from "../pages/BlogPage.vue";
import NosotrosPage from "../pages/NosotrosPage.vue";
import HomePage from "../pages/HomePage.vue";

export const webRoutes = [
    { path: "", name: "home-page", component: HomePage },
    { path: "blog", name: "blog-page", component: BlogPage },
    { path: "nosotros", name: "nosotros-page", component: NosotrosPage },
];
