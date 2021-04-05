import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { Home } from "./Home"
import { LocationList } from "./locations/LocationList"
// import { AnimalCard } from "./animal/AnimalCard"
import { AnimalList } from "./animal/AnimalList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>
            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
              <AnimalList />
            </Route>
            <Route path="/locations">
              <LocationList />
            </Route>
            <Route path="/customers">
              <CustomerList />
            </Route>
            <Route path="/employees">
              <EmployeeList />
            </Route>
        </>
    )
}