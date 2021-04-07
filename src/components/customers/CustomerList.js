import React, { useEffect, useState } from "react";
import { CustomerCard } from "./CustomerCard"
import { deleteCustomer, getAllCustomers } from "../../modules/CustomerManager"
import { useHistory } from "react-router";

export const CustomerList = () => {
    const history = useHistory();
    const handleDeleteCustomer = (id) => {
        deleteCustomer(id)
        .then(() => getAllCustomers().then(setCustomers));
    };
    const [customers, setCustomers] = useState([]);

    const getCustomers = () => {
        return getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI);
        });
    };
    useEffect(() => {
        getCustomers();
    }, []);
    return (
    <>
        <section className="section-content">
            <button type="button" className="btn"
            onClick={() => {history.push("/customers/create")}}>
                Add Customer
            </button>
        </section>
        <div className="container-cards">
            {customers.map(customer => 
            <CustomerCard 
            key={customer.id} 
            customer={customer} 
            handleDeleteCustomer={handleDeleteCustomer} />
            )}
        </div>
    </>    
    );
};