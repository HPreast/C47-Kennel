import { remoteURL } from "./AnimalManager"

export const getEmployeeById = (employeeId) => {
    return fetch(`${remoteURL}/employees/${employeeId}?_expand=location`)
    .then(response => response.json())
}

export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees`)
    .then(response => response.json())
}