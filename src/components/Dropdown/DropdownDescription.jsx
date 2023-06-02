/**
 * Import
 */
// Import necessary hooks and functionality from 'react' and 'react-router-dom'
import React, { useState } from "react";
// Import the style sheet
import "./dropdown.scss";

// A functional component 'DropdownDescription' is being declared, which receives a prop 'flatData'.
function DropdownDescription ({ flatData }) {
    // A state called 'isDropdownDescriptionOpen' is being declared with an initial value of 'false'.
    // 'setisDropdownDescriptionOpen' is the function used to update the state.
    const [isDropdownDescriptionOpen, setisDropdownDescriptionOpen] = useState(false);

    // The component returns JSX
    return (
        <div className="dropdownContent">
            {/* The button has an onClick event handler which toggles the 'isDropdownDescriptionOpen' state. */}
            {/* If 'isDropdownDescriptionOpen' is true, button displays 'Masquer la description'. If false, it displays 'Afficher la description'. */}
            <button onClick={() => setisDropdownDescriptionOpen(!isDropdownDescriptionOpen)}>
                {isDropdownDescriptionOpen ? 'Masquer la description' : 'Afficher la description'}
            </button>
            {/* If 'isDropdownDescriptionOpen' is true, it will render a paragraph with the text from 'flatData.description'.
            This is a shorthand conditional rendering in React. */}
            {isDropdownDescriptionOpen && <p>{flatData.description}</p>}
        </div>
    )
}

// Export the DropdownDescription component as the default export
export default DropdownDescription;
