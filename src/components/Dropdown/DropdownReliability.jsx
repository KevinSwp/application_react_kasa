/**
 * Import
 */
// Import necessary hooks and functionality from 'react' and 'react-router-dom'
import React, { useState } from "react";
// Import components
import ChevronUp from "../Chevrons/ChevronUp";
import ChevronDown from "../Chevrons/ChevronDown";

// A functional component 'DropdownReliability' is being declared, which receives a prop 'flatData'.
function DropdownReliability ({ flatData }) {
    // A state called 'isDropdownReliabilityOpen' is being declared with an initial value of 'false'.
    // 'setisDropdownReliabilityOpen' is the function used to update the state.
    const [isDropdownReliabilityOpen, setisDropdownReliabilityOpen] = useState(false);

    // The component returns JSX
    return (
        <div className="dropdownContent">
            {/* The button has an onClick event handler which toggles the 'isDropdownReliabilityOpen' state. */}
            <div className="button" onClick={() => setisDropdownReliabilityOpen(!isDropdownReliabilityOpen)}>
                <button>
                    {isDropdownReliabilityOpen ? 'Fiablité' : 'Fiabilité'}
                </button>
                {isDropdownReliabilityOpen ? <ChevronUp /> : <ChevronDown />}
            </div>

            <div className={`reliability ${isDropdownReliabilityOpen ? 'active' : ''}`}>
                {
                    isDropdownReliabilityOpen &&
                    <p>
                        Les annonces postées sur Kasa garantissent une fiabilité totale.
                        Les photos sont conformes aux logements, et toutes les informations
                        sont régulièrement vérifiées  par nos équipes.
                    </p>
                }
            </div>
        </div>
    )
}

// Export the DropdownReliability component as the default export
export default DropdownReliability;
