import { Link } from "react-router-dom";
import logo from "./LOGO.svg";
import './header.scss'; 

function Header () {
    return (
    <div className="header">
        <div className="Logo_Home">
            <img src={logo} alt="Page d'accueil" />
        </div>
        
        <div>
            <ul className="navigation">
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">A Propos</Link>
                </li>
            </ul>
        </div>
    </div>
    )    
}

export default Header;