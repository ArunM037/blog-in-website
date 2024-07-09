import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
            <h1>Blog.in</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/create">create blog</Link>
                <Link to="/admin">login</Link>
            </div>
        </div>
    );
}

export default Navbar;