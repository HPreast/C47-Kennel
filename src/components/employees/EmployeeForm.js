import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addCustomer } from '../../modules/CustomerManager';
import { addEmployee } from '../../modules/EmployeeManager';
import "./EmployeeForm.css"

export const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: "",
        location: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newEmployee = {...employee}
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newEmployee[event.target.id] = selectedVal
        setEmployee(newEmployee)
    }

    const handleClickSaveEmployee = (event) => {
        event.preventDefault()
        if (employee.name === "" || employee.location === "") {
            window.alert("Please fill out all fields.")
        } else {
            addEmployee(employee)
            .then(() => history.push("/employees"))
        }
    }
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee Name" value={employee.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Employee Location:</label>
                    <input type="text" id="location" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee Location" value={employee.location} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
				onClick={handleClickSaveEmployee}>
				Save New Employee
          </button>
        </form>
    )
}