/**
 * Import
 */
// Importing necessary hooks from 'react'
import React, { useState } from 'react';
// Import the Banner component
import ChevronLeft from '../Chevrons/ChevronLeft';
import ChevronRight from '../Chevrons/ChevronRight';

/**
 * Takes 'images' as a prop which is an array of image URLs.
 */
function Carousel({ images }) {
    // State and setter for the current image index displayed. It is initially set to 0.
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    /**
     * Function to go to the previous image in the carousel.
     */
    const goToPrevImage = () => {
        // Update the state. Takes the old index and calculates the new one.
        setCurrentImageIndex(oldIndex => {
            // The initial new index is one less than the old index.
            let newIndex = oldIndex - 1;
            // If the new index is less than 0 (beginning of array), set it to the last item in the array.
            if(newIndex < 0) {
                newIndex = images.length - 1;
            }

            return newIndex;
        });
    };

    /**
     * Function to go to the next image in the carousel.
     */
    const goToNextImage = () => {
        // Update the state with the new index.
        setCurrentImageIndex(oldIndex => {
            // The initial new index is one more than the old index.
            let newIndex = oldIndex + 1;
            // If the new index is greater than or equal to the length of images array (end of array), set it to the first item in the array.
            if(newIndex >= images.length) {
                newIndex = 0;
            }

            return newIndex;
        });
    };

    // If images is undefined or empty
    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className='carousel'>
            <button className='previous' onClick={goToPrevImage}>
                <ChevronLeft />
            </button>
            <img className='carousel_img' src={images[currentImageIndex]} alt="" />
            <button className='next' onClick={goToNextImage}>
                <ChevronRight />
            </button>
            <div className='current_img'>
                {/* +1 to display the first index */}
                {currentImageIndex + 1}/{images.length} 
            </div>
        </div>
    );
}

export default Carousel;
