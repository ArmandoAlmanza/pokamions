import { FC } from "react";

interface Props {
    onPokeChange: (poke: string) => void;
}

const GetPokemon: FC<Props> = ({ onPokeChange }) => {
    return (
        <div>
            <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                onChange={(e) => onPokeChange(e.target.value)}
                placeholder="Enter the pokemon name"
            />
        </div>
    );
};

export default GetPokemon;
