// import components
import Banner from "../../components/Banner/Banner";
import DropdownReliability from "../../components/Dropdown/DropdownReliability";
import DropdownRespect from "../../components/Dropdown/DropdownRespect";
import DropdownService from "../../components/Dropdown/DropdownService";
import DropdownSecurity from "../../components/Dropdown/DropdownService";
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
                <div className="btnReliability"><DropdownReliability /></div>
                <div className="btnRespect"><DropdownRespect /></div>
                <div className="btnService"><DropdownService /></div>
                <div className="btnSecurity"><DropdownSecurity /></div>
            </div>
        </div>
    )
}

export default About;