import React from "react"
import "./Customers.css"

export const CustomerCard = ({ customer, handleDeleteCustomer }) => {
    console.log(customer)
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
          </picture>
          <h3>Name: <span className="card-petname">
            {customer.name}
          </span></h3>
          <p>Address: {customer.address}</p>
          <p>Phone Number: {customer.phoneNumber}</p>
          <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
        </div>
      </div>
    );
  }