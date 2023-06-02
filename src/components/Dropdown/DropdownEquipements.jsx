/**
 * Import
 */
// Import necessary hooks and functionality from 'react' and 'react-router-dom'
import React, { useState } from "react";
// Import the style sheet
import "./dropdown.scss";

// A functional component 'DropdownEquipements' is being declared, which receives a prop 'flatData'.
function DropdownEquipements ({ flatData }) {
    // A state called 'isDropdownEquipementsOpen' is being declared with an initial value of 'false'.
    // 'setisDropdownEquipementsOpen' is the function used to update the state.
    const [isDropdownEquipementsOpen, setisDropdownEquipementsOpen] = useState(false);

    // The component returns JSX
    return (
        <div className="EquipementsContent">
            {/* The button has an onClick event handler which toggles the 'isDropdownEquipementsOpen' state. */}
            {/* If 'isDropdownEquipementsOpen' is true, button displays 'Masquer la description'. If false, it displays 'Afficher la description'. */}
            <button onClick={() => setisDropdownEquipementsOpen(!isDropdownEquipementsOpen)}>
                {isDropdownEquipementsOpen ? 'Masquer les équipements' : 'Afficher les équipements'}
            </button>
            {/* If 'isDropdownEquipementsOpen' is true, it will render a paragraph with the text from 'flatData.description'.
            This is a shorthand conditional rendering in React. */}
            {
                isDropdownEquipementsOpen && 
                <ul>
                    {flatData.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}
                </ul>
            }
        </div>
    )
}

// Export the DropdownEquipements component as the default export
export default DropdownEquipements;
