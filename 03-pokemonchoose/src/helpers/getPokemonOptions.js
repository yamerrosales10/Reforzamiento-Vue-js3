import pokemonApi from "../api/pokemonApi";

function getPokemons() {
    const pokemonsArr = Array.from({ length: 650 }).map((_, i) => i + 1);
    return pokemonsArr;
}

async function getPokemonNames([a, b, c, d] = []) {
    // const { data } = await pokemonApi.get(`/1`);
    // console.log(data);
    const [p1, p2, p3, p4] = await Promise.all([
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]);
    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id },
    ];
}

export default async function getPokemonsOptions() {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
    const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4));
    return pokemons;
}
