import React, { useEffect, useState } from "react";
import { LocationCard } from "./LocationCard"
import { getLocationById, getAllLocations, deleteLocation } from "../../modules/LocationManager"
import { useHistory } from "react-router";

export const LocationList = () => {
    const history = useHistory();
    
    const [locations, setLocations] = useState([]);
    
    const getLoctions = () => {
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI);
        });
    };
    const handleDeleteLocation = (id) => {
        deleteLocation(id)
        .then(() => getAllLocations().then(setLocations));
    };
    useEffect(() => {
        getLoctions();
    }, []);
    return (
    <>
        <section className="section-content">
            <button type="button" className="btn"
            onClick={() => {history.push("/locations/create")}}>
                Open New Location
            </button>
        </section>
        <div className="container-cards">
            {locations.map(location => 
            <LocationCard 
            key={location.id} 
            location={location} 
            handleDeleteLocation={handleDeleteLocation} />
            )}
        </div>
    </>
    );
};