import { remoteURL } from "./AnimalManager"

export const getLocationById = (locationId) => {
    return fetch(`${remoteURL}/locations/${locationId}?_expand=animal&_expand=employee&_expand=owner`)
    .then( response => response.json())
}

export const getAllLocations = () => {
    return fetch(`${remoteURL}/locations`)
    .then(response => response.json())
}