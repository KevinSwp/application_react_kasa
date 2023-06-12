/**
 * Import
 */
// Import necessary hooks and functionality from 'react' and 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Import the Banner component
import Carousel from '../../components/Carousel/Carousel';
import Dropdown from '../../components/Dropdown/Dropdown';
// import DropdownDescription from '../../components/Dropdown/DropdownDescription';
// import DropdownEquipements from '../../components/Dropdown/DropdownEquipements';
import Star from '../../components/Stars/Star';
// Import the style sheet
import './flat.scss';

/**
 * Define the Flat functional component 
 */
function Flat() {
    // State hook for storing fetched data
    const [flatData, setFlatData] = useState(null);

    // Hook to get 'id' from the URL parameters
    const { id } = useParams();

    // Hook for navigation, can be used to programmatically goTo404
    const goTo404 = useNavigate();

    // Effect hook runs when 'id' or 'goTo404' changes.
    useEffect(() => {

        // Fetch data from local JSON file
        fetch('/data/apartment.json')
            .then(response => response.json())
            .then(data => {

                // Search for a specific flat in data using the id from the URL parameters
                const foundFlat = data.find(flat => flat.id === id);

                // If no flat was found, navigate to 404 page
                if (!foundFlat) {
                    goTo404('/404');
                } else {
                    // Else update the state with the found flat's data
                    setFlatData(foundFlat);
                }
            })
            // If an error occurs during fetching, log the error and goTo404 to 404 page
            .catch(error => {
                console.error(error);
                goTo404('/404');
            })

    // Dependency array for the effect hook. If 'id' or 'goTo404' changes, the effect is re-run.
    }, [id, goTo404]);

    // If 'flatData' is still null (data has not been fetched yet), don't render anything
    if (!flatData) {
        return null;
    }

    // Render the apartment details
    return (
        <div>
            <div className='flatContent'>
                <Carousel images={flatData.pictures} />
                <div className='details_1'>
                    <div className='bloc1'>
                        <div className='bloc_title_location'>
                            <h1>{flatData.title}</h1>
                            <p>{flatData.location}</p>
                        </div>
                        <div className='tags'>
                            {/* Checks if flatData has 'tags' property and then maps over each tag */}
                            {
                                flatData.tags.map((tag, index) => (
                                    // For each tag, a paragraph with a 'tag' class is created, using the index as a key
                                    <p className='tag' key={index}>{tag}</p>
                                ))
                            }
                        </div>
                    </div>

                    <div className='bloc2'>
                        {
                            flatData.host &&
                            <div className='bloc_host'>
                                <div className='blocName'>
                                    {
                                        // Divide the name into an array ['Name', 'Name']
                                        flatData.host.name.split(' ').map((namePart, index) => (
                                            // Display each part on a new line
                                            <p className='hostName' key={index}>{namePart}</p>
                                        ))
                                    }
                                </div>
                                <img src={flatData.host.picture} alt={flatData.host.name} />
                            </div>
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
                </div>
                
                <div className='details_2'>
                    <div className='btnDescription'>
                        <Dropdown title="Description">
                                <p>{flatData.description}</p>
                        </Dropdown>
                    </div>
                    
                    <div className='btnEquipments'>
                        <Dropdown title="Équipements">
                            {
                                flatData.equipments && flatData.equipments.map((equipement, index) => (
                                    <p key={index}>{equipement}</p>
                                ))
                            }
                        </Dropdown>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export the Flat component as the default export
export default Flat;
