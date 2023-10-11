import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Blog Site</h1>
            <nav className="links">
                <Link to="/">Home</Link>
                <Link to="/create" >New Blog</Link>
            </nav>
        </nav>
     );
}
 
export default Navbar;