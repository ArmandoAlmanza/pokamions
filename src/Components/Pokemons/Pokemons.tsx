import { useState } from "react";

const Pokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/umbreon/";

    const [pokemon, setPokemon] = useState("pokamion aleatorio");
    const [pokemonImage, setPokemonImage] = useState("pokamion aleatorio");
    const [ability, setAbility] = useState([]);

    const getPokamion = async () => {
        await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const { name, abilities, sprites } = data;
                setPokemonImage(sprites.front_default);
                getHabilities(abilities);
                setPokemon(name);
            });
    };

    const getHabilities = (habilities: [any]) => {
        habilities.map((habilitie) => {
            const { name } = habilitie.ability;
            console.log(name);
            setAbility((currenAb) => currenAb.concat(name));
        });
    };

    function NumberList(props: string[]) {
        const listItems = props.map((abi) => <li key={ability.length}>{abi}</li>);
        return <ul>{listItems}</ul>;
    }

    return (
        <div>
            <h1>Pokamions</h1>
            <button onClick={getPokamion}>Get Pokamion</button>
            <p>{pokemon}</p>
            {NumberList(ability)}
            <img src={pokemonImage} alt="pokamion random" />
        </div>
    );
};

export default Pokemon;
