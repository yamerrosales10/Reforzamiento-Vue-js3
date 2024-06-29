export const actions = {
    async incrementRandomInt(context) {
        context.commit("changeLoading");
        const data = await getRandomInt();
        context.commit("changeLoading");
        context.commit("incrementBy", data);
    },
};
