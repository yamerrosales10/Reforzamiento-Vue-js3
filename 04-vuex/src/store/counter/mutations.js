export const mutations = {
    increment(state) {
        state.count++;
    },
    incrementBy(state, val) {
        state.count += val;
    },
    changeLoading(state) {
        state.isLoading = !state.isLoading;
    },
};
