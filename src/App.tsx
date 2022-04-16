import { Link } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Link to="/Pokemon">Pokamions</Link>
            <img src="/assets/Umbreon.png" alt="umbreon" />
        </div>
    );
};

export default App;
