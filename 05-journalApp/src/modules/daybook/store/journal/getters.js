export const journalGetters = {
    getEntriesByTerm:
        (state) =>
        (term = "") => {
            if (!term.length) return state.entries;
            return state.entries.filter((entry) =>
                entry.text.toLowerCase().includes(term.toLowerCase())
            );
        },
    getEntriesByID: (state) => (id) => {
        const entry = state.entries.find((state) => state.id === id);
        return { ...entry };
    },
};
