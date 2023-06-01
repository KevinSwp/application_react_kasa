// Import necessary hooks and functionality from 'react' and 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Import the style sheet
import './flat.scss';

// Define the Flat functional component
function Flat() {
    // Use the useState hook to declare a state variable 'flatData' and its corresponding setter 'setFlatData'
    // The initial state is null
    const [flatData, setFlatData] = useState(null);

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

    // If 'flatData' is still null (data has not loaded yet), show a loading message
    if (!flatData) {
        return <div>Loading...</div>;
    }

    // Render the apartment details
    return (
        <div>
            <h2>{flatData.title}</h2>
            <img src={flatData.cover} alt={flatData.title} />
            {/* And any other information you want to display */}
        </div>
    );
}

// Export the Flat component as the default export
export default Flat;
