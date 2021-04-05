import React from "react"
import "./Employees.css"

export const EmployeeCard = ({ employee }) => {
    console.log(employee)
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
          </picture>
          <h3>Name: <span className="card-petname">
            {employee.name}
          </span></h3>
          <p>Location: {employee.location}</p>
        </div>
      </div>
    );
  }