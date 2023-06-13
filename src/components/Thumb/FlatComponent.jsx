// Import React and necessary hooks
import React from 'react';
// Import Link from 'react-router-dom'
import { Link } from 'react-router-dom';

/**
 * Function flat
 */
function Flat({ id, cover, title }) {
    return (
        <Link to={`/flats/${id}`} key={id} className='flat'>
            {/* Display the cover image and the title of the flat */}
            <img src={cover} alt={title}/>
            <h1>{title}</h1>
        </Link>
    );
}

// Export
export default Flat;
