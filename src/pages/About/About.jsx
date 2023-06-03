// Import necessary hooks from 'react'
import React, { useState, useEffect } from 'react';

import Banner from "../../components/Banner/Banner";
// Import the banner image
import bannerAbout from "./about.png";
import './about.scss';

function About () {
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

    return (
        <div className="bannerAbout">
            <Banner imgSrc={bannerAbout} />
        </div>
    )
}

export default About;