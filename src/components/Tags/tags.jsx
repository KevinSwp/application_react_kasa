// Import React
import React from 'react';

/**
 * Function tags
 */
function Tag({ content }) {
    return (
        // Render a paragraph with a 'tag' class
        <p className='tag'>{content}</p>
    );
}

// Export the Tag component as the default export
export default Tag;
