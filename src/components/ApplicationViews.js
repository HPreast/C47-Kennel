import React from "react"
import { Route } from "react-router-dom"
import { CustomerCard } from "./customers/Customers"
import { EmployeeCard } from "./employees/Employees"
import { Home } from "./Home"
import { LocationCard } from "./locations/Locations"
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
              <LocationCard />
            </Route>
            <Route path="/customers">
              <CustomerCard />
            </Route>
            <Route path="/employees">
              <EmployeeCard />
            </Route>
        </>
    )
}