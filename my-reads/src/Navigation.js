import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
    <div>
        <h1 className="nav-banner">My Reads</h1>
        <div className="nav-links">
            <Link to="/">Shelves</Link> &nbsp; | &nbsp; <Link to="/search">Search</Link>
        </div>
    </div>);
}

export default Navigation;