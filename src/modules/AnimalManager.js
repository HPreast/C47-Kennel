export const remoteURL = "http://localhost:5002"

export const getAnimalById = (animalId) => {
    //be sure your animals have good data and related to a location and customer
    return fetch(`${remoteURL}/animals/${animalId}?_expand=location&_expand=customer`)
    .then(response => response.json())
}

export const getAllAnimals = () => {
    return fetch(`${remoteURL}/animals`)
    .then(response => response.json())
}