import { useState } from "react";

const Pokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/umbreon/";

    const [pokemon, setPokemon] = useState({
        id: 0,
        name: "",
        sprite: "",
        baseExperience: "",
        abilities: [""],
    });
    const [pokemonImage, setPokemonImage] = useState("pokamion aleatorio");

    const getPokamion = async () => {
        await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const { name, abilities, sprites, id, base_experience } = data;
                const { front_default } = sprites;
                setPokemon(
                    ((pokemon.name = name),
                    (pokemon.id = id),
                    ((pokemon.sprite = front_default),
                    (pokemon.baseExperience = base_experience),
                    (pokemon.abilities = abilities)))
                );
                console.log(pokemon);
                setPokemonImage(front_default);
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
        <div>
            <h1>Pokamions</h1>
            <button onClick={getPokamion}>Get Pokamion</button>
            <img src={pokemonImage} alt="pokamion random" />
        </div>
    );
};

export default Pokemon;
