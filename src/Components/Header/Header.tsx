import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="text-center p-4 flex justify-around items-center flex-col md:flex-row">
            <div>
                <h3 className="text-5xl">
                    Armi<span className="text-red-400">Dex</span>
                </h3>
            </div>
            <nav className="flex justify-center mt-2 gap-7">
                <Link
                    className="text-2xl hover:text-violet-600 transition-all"
                    to="/"
                >
                    {" "}
                    Home 🏠
                </Link>
                <Link
                    className="md:mr-3  text-2xl hover:text-violet-600 transition-all"
                    to="/Pokemon"
                >
                    Pokamions
                </Link>
            </nav>
        </header>
    );
};

export default Header;
