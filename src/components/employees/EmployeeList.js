import React, { useEffect, useState } from "react"
import { EmployeeCard } from "./EmployeeCard"
import { deleteEmployee, getAllEmployees } from "../../modules/EmployeeManager"
import { useHistory } from "react-router";

export const EmployeeList = () => {
    const history = useHistory();
    const handleDeleteEmployee = (id) => {
        deleteEmployee(id)
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
    <>
        <section className="section-content">
            <button type="button" className="btn"
            onClick={() => {history.push("/employees/create")}}>
            Add New Employee
            </button>
        </section>
        <div className="container-cards">
            {employees.map(emp => 
                <EmployeeCard
                key={emp.id}
                employee={emp} 
                handleDeleteEmployee={handleDeleteEmployee} />
            )}
        </div>
    </>    
    );
};