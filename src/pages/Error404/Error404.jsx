import { Link } from "react-router-dom";
import error404 from "./404.png";
import message404 from "./message404.png";
import "./error404.scss";

function Error404 () {
    return (
        <div className="error404">
            <img src={error404} alt="Erreur 404" />
            <img src={message404} alt="Message 404" />
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error404;