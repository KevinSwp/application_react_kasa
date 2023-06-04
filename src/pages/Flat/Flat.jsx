/**
 * Import
 */
// Import necessary hooks and functionality from 'react' and 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
    // State hook for storing fetched data
    const [flatData, setFlatData] = useState(null);

    // Hook to get 'id' from the URL parameters
    const { id } = useParams();

    // Hook for navigation, can be used to programmatically navigate
    const navigate = useNavigate();

    // Effect hook runs when 'id' or 'navigate' changes.
    useEffect(() => {

        // Fetch data from local JSON file
        fetch('/data/apartment.json')
            .then(response => response.json())
            .then(data => {

                // Search for a specific flat in data using the id from the URL parameters
                const foundFlat = data.find(item => item.id === id);

                // If no flat was found, navigate to 404 page
                if (!foundFlat) {
                    navigate('/404');
                } else {
                    // Else update the state with the found flat's data
                    setFlatData(foundFlat);
                }
            })
            // If an error occurs during fetching, log the error and navigate to 404 page
            .catch(error => {
                console.error(error);
                navigate('/404');
            })

    // Dependency array for the effect hook. If 'id' or 'navigate' changes, the effect is re-run.
    }, [id, navigate]);

    // If 'flatData' is still null (i.e., data has not been fetched yet), don't render anything
    if (!flatData) {
        return null;
    }

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
