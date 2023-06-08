import logoFooter from "./logo_footer.svg"
import './footer.scss'; 

function Footer (){
    return (
        <div className="Logo_Footer">
            <img src={logoFooter} alt="Logo Kasa" />
            <p>&#169; 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer