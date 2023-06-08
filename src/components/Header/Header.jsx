import { NavLink } from "react-router-dom";

import logo from "./LOGO.svg";

import './header.scss'; 

function Header () {
    return (
        <div className="header">
            <NavLink to="/">
                <div className="Logo_Home">
                    <img src={logo} alt="Lien vers la page d'accueil" />
                </div>
            </NavLink>
            
            <div className="blocNav">
                <ul className="navigation">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'default_link active_link' : 'default_link'}>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'default_link active_link' : 'default_link'}>
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )    
}

export default Header;
