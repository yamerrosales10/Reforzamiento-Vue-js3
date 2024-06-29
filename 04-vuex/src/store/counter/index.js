import { getRandomInt } from "../../helpers/getRandomInt";
import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";
export const counterStore = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
