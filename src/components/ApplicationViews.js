import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { Home } from "./Home"
import { LocationList } from "./locations/LocationList"
// import { AnimalCard } from "./animal/AnimalCard"
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationDetail } from "./locations/LocationDetail"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>
            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
              <AnimalList />
            </Route>
            <Route path="/animals/:animalId(\d+)">
              <AnimalDetail />
            </Route>
            <Route exact path="/locations">
              <LocationList />
            </Route>
            <Route path="/locations/:locationId(\d+)">
              <LocationDetail />
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