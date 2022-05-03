import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="site-header">
            <nav className="navbar">
                <Link to="/Pokemon">Pokamions</Link>
                <Link to="/"> Home 🏠</Link>
            </nav>
        </header>
    );
};

export default Header;
