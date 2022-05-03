import { useState } from "react";

const Pokemon = () => {
    const [pokeName, setpokeName] = useState("");

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`;

    const [pokemon, setPokemon] = useState({
        id: 0,
        name: "",
        front_default: "",
        base_experience: "",
    });

    const getPokamion = async () => {
        await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const { name, sprites, id, base_experience } = data;
                const { front_default } = sprites;
                const pokamion = {
                    id,
                    name,
                    front_default,
                    base_experience,
                };
                setPokemon({ ...pokemon, ...pokamion });
                console.log(pokemon);
            });
    };

    /* const getHabilities = (habilities: [any]) => {
        habilities.map((habilitie) => {
            const { name } = habilitie.ability;
            console.log(name);
            setAbility((currenAb) => currenAb.concat(name));
        });
    };

    function NumberList(props: string[]) {
        const listItems = props.map((abi) => <li key={ability.length}>{abi}</li>);
        return <ul>{listItems}</ul>;
    } */

    return (
        <div className=" container">
            <h1>Pokamions</h1>
            <button onClick={getPokamion}>Get Pokamion</button>

            <input
                value={pokeName}
                name="pokeName"
                onChange={(e) => setpokeName(e.target.value)}
            />

            <div className="pokemon__container">
                <p>The pokedex number is: {pokemon.id || "Id random"}</p>
                <h1>{pokemon.name.toUpperCase() || "Pokemon Random"}</h1>
                <img src={pokemon.front_default} alt="pokamion random" />
                <p>The base xperience is: {pokemon.base_experience}</p>
            </div>
        </div>
    );
};

export default Pokemon;
