import { FC } from "react";

interface Props {
    onPokeChange: (poke: string) => void;
}

const GetPokemon: FC<Props> = ({ onPokeChange }) => {
    return (
        <div>
            <input
                className="bg-[#FFF9F9] appearance-none border-2 border-gray rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-purple"
                type="text"
                onChange={(e) => onPokeChange(e.target.value)}
                placeholder="Enter the pokemon name"
            />
        </div>
    );
};

export default GetPokemon;
