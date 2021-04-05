import React, { useEffect, useState } from "react";
import { CustomerCard } from "./CustomerCard"
import { getAllCustomers } from "../../modules/CustomerManager"

export const CustomerList = () => {
    const handleDeleteCustomer = (id) => {
        delete(id)
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
        <div className="container-cards">
            {customers.map(customer => 
            <CustomerCard 
            key={customer.id} 
            customer={customer} 
            handleDeleteCustomer={handleDeleteCustomer} />
            )}
        </div>
    );
};