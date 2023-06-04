/**
 * Import
 */
// Import necessary hooks and functionality from 'react' and 'react-router-dom'
import React, { useState } from "react";
// Import components
import ChevronUp from "../Chevrons/ChevronUp";
import ChevronDown from "../Chevrons/ChevronDown";

// A functional component 'DropdownService' is being declared, which receives a prop 'flatData'.
function DropdownService ({ flatData }) {
    // A state called 'isDropdownServiceOpen' is being declared with an initial value of 'false'.
    // 'setisDropdownServiceOpen' is the function used to update the state.
    const [isDropdownServiceOpen, setisDropdownServiceOpen] = useState(false);

    // The component returns JSX
    return (
        <div className="dropdownContent">
            {/* The button has an onClick event handler which toggles the 'isDropdownServiceOpen' state. */}
            <div className="button" onClick={() => setisDropdownServiceOpen(!isDropdownServiceOpen)}>
                <button>
                    {isDropdownServiceOpen ? 'Service' : 'Service'}
                </button>
                {isDropdownServiceOpen ? <ChevronUp /> : <ChevronDown />}
            </div>

            <div className={`service ${isDropdownServiceOpen ? 'active' : ''}`}>
                {
                    isDropdownServiceOpen &&
                    <p>
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                    </p>
                }
            </div>
        </div>
    )
}

// Export the DropdownService component as the default export
export default DropdownService;
