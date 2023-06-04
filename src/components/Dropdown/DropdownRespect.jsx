/**
 * Import
 */
// Import necessary hooks and functionality from 'react' and 'react-router-dom'
import React, { useState } from "react";
// Import components
import ChevronUp from "../Chevrons/ChevronUp";
import ChevronDown from "../Chevrons/ChevronDown";

// A functional component 'DropdownRespect' is being declared, which receives a prop 'flatData'.
function DropdownRespect ({ flatData }) {
    // A state called 'isDropdownRespectOpen' is being declared with an initial value of 'false'.
    // 'setisDropdownRespectOpen' is the function used to update the state.
    const [isDropdownRespectOpen, setisDropdownRespectOpen] = useState(false);

    // The component returns JSX
    return (
        <div className="dropdownContent">
            {/* The button has an onClick event handler which toggles the 'isDropdownRespectOpen' state. */}
            <div className="button" onClick={() => setisDropdownRespectOpen(!isDropdownRespectOpen)}>
                <button>
                    {isDropdownRespectOpen ? 'Respect' : 'Respect'}
                </button>
                {isDropdownRespectOpen ? <ChevronUp /> : <ChevronDown />}
            </div>

            <div className={`respect ${isDropdownRespectOpen ? 'active' : ''}`}>
                {
                    isDropdownRespectOpen &&
                    <p>
                        La bienveillance fait partie des valeurs fondatrices de Kasa.
                        Tout comportement discriminatoire ou de perturbation du voisinage
                        entraînera une exclusion de notre plateforme.
                    </p>
                }
            </div>
        </div>
    )
}

// Export the DropdownRespect component as the default export
export default DropdownRespect;
