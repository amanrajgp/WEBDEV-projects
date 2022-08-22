import react from "react";
import {Link} from "react-router-dom";

function navbar(){
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
    )
}

export default navbar;