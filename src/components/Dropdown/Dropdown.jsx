/**
 * Import
 */
// Import necessary hooks and functionality from 'react' and 'react-router-dom'
import React, { useState } from "react";
// Import Chevron components
import ChevronUp from "../Chevrons/ChevronUp";
import ChevronDown from "../Chevrons/ChevronDown";

/**
 * Dropdown function
 */
function Dropdown ({ title, children }) {
    // Initially set to false, dropdown is closed by default.
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // The component returns a section of JSX
    return (
        <div className="blocDropdownContent">
            {/* When the button is clicked, the 'isDropdownOpen' state is toggled between true and false. */}
            <button type="button" className="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <span>{title}</span>
                {/* If 'isDropdownOpen' is true, then the 'ChevronUp' component is displayed, otherwise, 'ChevronDown' is displayed. */}
                {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
            </button>

            {/* 'active' added when 'isDropdownOpen' is true. */}
            <div className={`dropdownContent ${isDropdownOpen ? 'active' : ''}`}>
                {/* This is a conditional rendering that only renders the dropdown content when 'isDropdownOpen' is true. */}
                {isDropdownOpen && <div className="dropdownContent">        
                    {children}
                </div>}
            </div>
        </div>
    )
}

// Export the Dropdown component as the default export
export default Dropdown;
