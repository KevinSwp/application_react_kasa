/**
 * Import
 */
// Import necessary hooks and functionality from 'react' and 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Import the Banner component
import Banner from '../../components/Banner/Banner';
// Import the style sheet
import './flat.scss';

/**
 * Define the Home functional component 
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
        <div className='bannerFlat'>
            <Banner imgSrc={flatData.cover} alt={flatData.title}/>
            <div className='details_1'>
                <div>
                    <h1>{flatData.title}</h1>
                    <p>{flatData.location}</p>
                </div>
                {
                    flatData.host &&
                    <div className='host_rate'>
                        <div>
                            <p>{flatData.host.name}</p>
                            <img src={flatData.host.picture} alt={flatData.host.name} />
                        </div>
                        <span>X X X X X</span>
                    </div>
                }
            </div>
            <div className='tags'>
                {
                    flatData.tags && flatData.tags.map((tag, index) => (
                        <p key={index}>{tag}</p>
                    ))
                }
            </div>
            <div className='details_2'>

            </div>
        </div>
    );
}

// Export the Flat component as the default export
export default Flat;
