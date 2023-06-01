/**
 * Import
 */
// Import the Link component from 'react-router-dom' for navigation
import { Link } from 'react-router-dom';
// Import necessary hooks from 'react'
import React, { useState, useEffect } from 'react';
// Import the Banner component
import Banner from '../../components/Banner/Banner';
// Import the banner image
import bannerHome from "./bannerHome.png";
// Import the style sheet
import './home.scss';

/**
 * Define the Home functional component 
 */
function Home() {
    // Use the useState hook to declare a state variable 'flatData' and its corresponding setter 'setFlatData'
    // The initial state is an empty array
    const [flatData, setFlatData] = useState([]);

    // Use the useEffect hook to fetch data when the component mounts
    useEffect(() => {
        // Fetch data from 'apartment.json' file located at '/data' path
        fetch('/data/apartment.json')
            // Convert the response to JSON format
            .then(response => response.json())
            // Update the 'flatData' state with the data fetched
            .then(data => setFlatData(data))
            // Log any error that occurs during the fetch operation
            .catch(error => console.error(error))
    }, []); // Dependency array is empty so this effect will only run once, after the initial render

    // Return JSX for the Home component
    return (
        <div>
            <div className='bannerHome'>
                {/* Use the Banner component and pass the banner image as a prop */}
                <Banner imgSrc={bannerHome} />
                <p className='textBannerHome'>Chez vous, partout et ailleurs</p>
            </div>
            <div className="apartmentList">
                {/* Map over the 'flatData' state to render a Link for each flat */}
                {flatData.map((flat) => (
                    <Link to={`/flats/${flat.id}`} key={flat.id} className='flat'>
                        {/* Display the cover image and the title of each flat */}
                        <img src={flat.cover} alt={flat.title}/>
                        <h1>{flat.title}</h1>
                    </Link>
                ))}
            </div>
        </div>
    );
}

// Export the Home component as the default export
export default Home;
