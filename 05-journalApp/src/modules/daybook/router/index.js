export const dayBookRoutes = {
    name: "daybook",
    component: () => import("../layouts/DayBookLayout.vue"),
    children: [
        {
            path: "",
            name: "no-entry",
            component: () => import("../views/NoEntrySelected.vue"),
        },
        {
            path: ":id",
            name: "entry",
            component: () => import("../views/entryView.vue"),
            props: (router) => {
                return {
                    id: router.params.id,
                };
            },
        },
    ],
};
