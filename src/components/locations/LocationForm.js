import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addLocation } from "../../modules/LocationManager";
import "./LocationForm.css"

export const LocationForm = () => {
    const [location, setLocation] = useState({
        name: "",
        address: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newLocation = {...location}
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newLocation[event.target.id] = selectedVal
        setLocation(newLocation)
    }

    const handleClickSaveLocation = (event) => {
        event.preventDefault()
        if (location.name === "" || location.address === "") {
            window.alert("Please fill out all fields.")
        } else {
            addLocation(location)
            .then(() => history.push("/locations"))
        }
    }
    return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location Name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location Name" value={location.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Location Address:</label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location Address" value={location.address} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
				onClick={handleClickSaveLocation}>
				Save Location
          </button>
        </form>
    )
}  