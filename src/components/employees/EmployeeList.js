import React, { useEffect, useState } from "react"
import { EmployeeCard } from "./EmployeeCard"
import { getAllEmployees } from "../../modules/EmployeeManager"

export const EmployeeList = () => {
    const handleDeleteEmployee = (id) => {
        delete(id)
        .then(() => getAllEmployees().then(setEmployees));
    };

    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return getAllEmployees().then(employeesFromAPI => {
            setEmployees(employeesFromAPI);
        });
    };
    useEffect(() => {
        getEmployees();
    }, []);
    return (
        <div className="container-cards">
            {employees.map(emp => 
                <EmployeeCard
                key={emp.id}
                employee={emp} 
                handleDeleteEmployee={handleDeleteEmployee} />
            )}
        </div>
    );
};