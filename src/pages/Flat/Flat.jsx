/**
 * Import
 */
// Import necessary hooks and functionality from 'react' and 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Import the Banner component
import Carousel from '../../components/Carousel/Carousel';
import DropdownDescription from '../../components/Dropdown/DropdownDescription';
import DropdownEquipements from '../../components/Dropdown/DropdownEquipements';
import Star from '../../components/Stars/Star';
// Import the style sheet
import './flat.scss';

/**
 * Define the Flat functional component 
 */
function Flat() {
    // Use the useState hook to declare a state variable 'flatData' and its corresponding setter 'setFlatData'
    const [flatData, setFlatData] = useState([]);

    // Use the useParams hook to access the route parameter 'id'
    const { id } = useParams(); 

    // Use the useEffect hook to fetch data when the component mounts or 'id' changes
    useEffect(() => {
        // Fetch data from 'apartment.json' file located at '/data' path
        fetch('/data/apartment.json')
            // Convert the response to JSON format
            .then(response => response.json())
            .then(data => {
                // Find the apartment that corresponds to the 'id' from the URL
                const foundFlat = data.find(item => item.id === id);
                // Update the 'flatData' state with the found apartment
                setFlatData(foundFlat);
            })
            // Log any error that occurs during the fetch operation
            .catch(error => console.error(error))
    }, [id]); // Dependency array includes 'id' so this effect will rerun whenever 'id' changes

    // Render the apartment details
    return (
        <div className='flatContent'>
            <Carousel images={flatData.pictures} />
            <div className='details_1'>
                <div className='bloc_title_location'>
                    <h1>{flatData.title}</h1>
                    <p>{flatData.location}</p>
                </div>
                {
                    flatData.host &&
                    <div>
                        <div className='bloc_host'>
                            <p className='hostName'>{flatData.host.name}</p>
                            <img src={flatData.host.picture} alt={flatData.host.name} />
                        </div>
                        
                    </div>
                }
            </div>

            <div className='tags'>
                {/* Checks if flatData has 'tags' property and then maps over each tag */}
                {
                    flatData.tags && flatData.tags.map((tag, index) => (
                        // For each tag, a paragraph with a 'tag' class is created, using the index as a key
                        <p className='tag' key={index}>{tag}</p>
                    ))
                }
                {/* A paragraph with a 'rate' class, that will contain the Star components */}
                <span className='rate'>
                    {/* Create an array with 5 elements and map over each. The array is created with spread operator and Array(5) */}
                    {
                        [...Array(5)].map((star, index) => {
                        /* For each element of the array, a Star component is rendered. 
                        The Star component gets a 'filled' prop that depends on if the current index 
                        is less than the rating from flatData. This will render 'rating' number of filled stars. */
                            return <Star key={index} filled={index < flatData.rating} />
                        })
                    }
                </span>
            </div>
            
            <div className='details_2'>
                <div className='btnDescription'>
                    <DropdownDescription flatData={flatData}/>
                </div>
                <div className='btnEquipments'>
                    <DropdownEquipements flatData={flatData}/>
                </div>
            </div>
        </div>
    );
}

// Export the Flat component as the default export
export default Flat;
