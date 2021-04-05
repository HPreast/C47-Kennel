import React, { useEffect, useState } from "react";
import { LocationCard } from "./LocationCard"
import { getLocationById, getAllLocations } from "../../modules/LocationManager"

export const LocationList = () => {
    const handleDeleteLocation = (id) => {
        delete(id)
        .then(() => getAllLocations().then(setLocations));
    };

    const [locations, setLocations] = useState([]);

    const getLoctions = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI);
        });
    };
    useEffect(() => {
        getLoctions();
    }, []);
    return (
    <div className="container-cards">
        {locations.map(location => 
        <LocationCard 
        key={location.id} 
        location={location} 
        handleDeleteLocation={handleDeleteLocation} />
        )}
    </div>
    );
};