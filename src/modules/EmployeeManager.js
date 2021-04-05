import { remoteURL } from "./AnimalManager"

export const getEmployeeById = (employeeId) => {
    return fetch(`${remoteURL}/employees/${employeeId}?_expand=location`)
    .then(response => response.json())
}

export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees`)
    .then(response => response.json())
}

export const deleteEmployee = (id) => {
    return fetch(`${remoteURL}/employees/${id}`, {
        method: "DELETE"
    }).then(response => response.json())
}