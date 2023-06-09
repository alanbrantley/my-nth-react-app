import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <div className="navbar">
            <h1>React App Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
}
 
export default Navbar;