/**
 * Import
 */
// Import necessary hooks and functionality from 'react' and 'react-router-dom'
import React, { useState } from "react";
// Import components
import ChevronUp from "../Chevrons/ChevronUp";
import ChevronDown from "../Chevrons/ChevronDown";

// A functional component 'DropdownSecurity' is being declared, which receives a prop 'flatData'.
function DropdownSecurity ({ flatData }) {
    // A state called 'isDropdownSecurityOpen' is being declared with an initial value of 'false'.
    // 'setisDropdownSecurityOpen' is the function used to update the state.
    const [isDropdownSecurityOpen, setisDropdownSecurityOpen] = useState(false);

    // The component returns JSX
    return (
        <div className="dropdownContent">
            {/* The button has an onClick event handler which toggles the 'isDropdownSecurityOpen' state. */}
            <div className="button" onClick={() => setisDropdownSecurityOpen(!isDropdownSecurityOpen)}>
                <button>
                    {isDropdownSecurityOpen ? 'Sécurité' : 'Sécurité'}
                </button>
                {isDropdownSecurityOpen ? <ChevronUp /> : <ChevronDown />}
            </div>

            <div className={`security ${isDropdownSecurityOpen ? 'active' : ''}`}>
                {
                    isDropdownSecurityOpen &&
                    <p>
                        La sécurité est la priorité de Kasa.
                        Aussi bien pour nos hôtes que pour les voyageurs,
                        chaque logement correspond aux critères de sécurité établis par nos services.
                        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à
                        nos équipes de vérifier que les standards sont bien respectés.
                        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                }
            </div>
        </div>
    )
}

// Export the DropdownSecurity component as the default export
export default DropdownSecurity;
