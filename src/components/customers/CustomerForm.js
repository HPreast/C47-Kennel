import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addCustomer } from "../../modules/CustomerManager";
import "./CustomerForm.css"

export const CustomerForm = () => {
    const [customer, setCustomer] = useState({
        name: "",
        address: "",
        phoneNumber: ""
    });
    const [isloading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newCustomer = {...customer}
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newCustomer[event.target.id] = selectedVal
        setCustomer(newCustomer)
    }

    const handleClickSaveCustomer = (event) => {
        event.preventDefault();
        if (customer.name === "" || customer.address === "" || customer.phoneNumber === "") {
            window.alert("Please fill out all fields.")
        } else {
            addCustomer(customer)
            .then(() => history.push("/customers"))
        }
    }
    return (
        <form className="customerForm">
            <h2 className="customerForm__title">New Customer</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Customer Name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer Name" value={customer.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Customer Address:</label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer Address" value={customer.address} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Customer Phone Number:</label>
                    <input type="text" id="phoneNumber" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer Phone Number" value={customer.phoneNumber} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
				onClick={handleClickSaveCustomer}>
				Save New Customer
          </button>
        </form>
    )
}