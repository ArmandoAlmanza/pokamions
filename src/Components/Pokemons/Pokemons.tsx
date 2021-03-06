import { useState } from "react";
import GetPokemon from "./GetPokemon";

const Pokemon = () => {
    const [pokeName, setpokeName] = useState("umbreon");

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
        <div className="content-center my-0 mx-auto p-6 max-w-xl container">
            <h1 className="text-center text-4xl">
                Get your <span className="text-red-400">Pokemon</span>
            </h1>
            <div className="px-3 flex content-center items-center flex-col justify-around mt-5 md:flex-row">
                <GetPokemon
                    onPokeChange={(poke: string) =>
                        setpokeName(poke.toLocaleLowerCase())
                    }
                />
                <button
                    className="py-2 bg-transparent border-dk-red border-2 hover:bg-lt-red text-lg px-6 my-3 transition-all rounded-xl"
                    onClick={getPokamion}
                >
                    Get pokemon
                </button>
            </div>

            <div className="pokemon__container">
                {pokemon.name === "" ? (
                    ""
                ) : (
                    <div>
                        <h1 className="text-center text-4xl mb-3">
                            {pokemon.name.toUpperCase() || ""}
                        </h1>
                        <p className="text-xl my-5 text-center">
                            The pokedex number is:{" "}
                            <span className="font-bold">
                                {pokemon.id || ""}
                            </span>
                        </p>
                        <p className="text-center text-lg">
                            The base xperience is: {pokemon.base_experience}
                        </p>
                        <img
                            className="mx-auto h-40"
                            src={pokemon.front_default}
                            alt="pokamion random"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Pokemon;
