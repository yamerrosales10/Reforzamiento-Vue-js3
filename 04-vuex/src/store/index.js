import { createStore } from "vuex";
import { counterStore } from "./counter";

// Create a new store instance.
export const store = createStore({
    modules: {
        counter: counterStore,
    },
});
