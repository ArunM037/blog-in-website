import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="Npt-found">
            <h2>sorry</h2>
            <p>the page you are looking for does not exist</p>
            <Link to="/">back to homepage...</Link>
        </div>
    );
}

export default NotFound