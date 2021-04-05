import { remoteURL } from "./AnimalManager"

export const getCustomerbyId = (customerId) => {
    return fetch(`${remoteURL}/customers/${customerId}?_expand=location&_expand=animal`)
    .then(response => response.json())
}

export const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers`)
    .then(response => response.json())
}