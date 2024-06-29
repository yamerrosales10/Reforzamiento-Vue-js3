import { state } from "./state";
import { journalGetters } from "./getters";
export const journalModule = {
    namespaced: true,
    // actions,
    getters: journalGetters,
    state,
};
