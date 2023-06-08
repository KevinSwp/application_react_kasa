/**
 * Import
 */
// Import necessary hooks and functionality from 'react' and 'react-router-dom'
import React, { useState } from "react";
// Import components
import ChevronUp from "../Chevrons/ChevronUp";
import ChevronDown from "../Chevrons/ChevronDown";

// A functional component 'DropdownDescription' is being declared, which receives a prop 'flatData'.
function Dropdown ({ title, children }) {
    // A state called 'isDropdownDescriptionOpen' is being declared with an initial value of 'false'.
    // 'setisDropdownDescriptionOpen' is the function used to update the state.
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // The component returns JSX
    return (
        <div className="blocDropdownContent">
            {/* The button has an onClick event handler which toggles the 'isDropdownDescriptionOpen' state. */}
            <button type="button" className="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <span>{title}</span>
                {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
            </button>

            {/* If 'isDropdownDescriptionOpen' is true, it will render a paragraph with the text from 'flatData.description'. */}
            <div className={`dropdownContent ${isDropdownOpen ? 'active' : ''}`}>
                {isDropdownOpen && <div className="dropdownContent">        
                    {children}
                </div>}
            </div>
        </div>
    )
}

// Export the DropdownDescription component as the default export
export default Dropdown;
