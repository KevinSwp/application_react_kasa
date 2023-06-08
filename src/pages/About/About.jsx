// import components
import Banner from "../../components/Banner/Banner";
import Dropdown from "../../components/Dropdown/Dropdown";
// Import the banner image
import bannerAbout from "./about.png";
import './about.scss';

function About () {
    return (
        <div>
            <div className="bannerAbout">
                <Banner imgSrc={bannerAbout} />
            </div>

            <div className="dropdowns">
                <div className="btnReliability">
                    <Dropdown title="Fiabilité">
                            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </Dropdown>
                </div>
                <div className="btnRespect">
                    <Dropdown title="Respect">
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </Dropdown>
                </div>
                <div className="btnRespect">
                    <Dropdown title="Service">
                            <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </Dropdown>
                </div>
                <div className="btnRespect">
                    <Dropdown title="Securité">
                            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
                                En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
                                Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default About;