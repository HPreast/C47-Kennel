import { remoteURL } from "./AnimalManager"

export const getLocationById = (locationId) => {
    return fetch(`${remoteURL}/locations/${locationId}`)
    .then( response => response.json())
}

export const getAllLocations = () => {
    return fetch(`${remoteURL}/locations`)
    .then(response => response.json())
}

export const deleteLocation = (id) => {
    return fetch(`${remoteURL}/locations/${id}`, {
        method: "DELETE"
    }).then(response => response.json())
}