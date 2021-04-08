import React, { useState } from "react"
import { Redirect, Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { Home } from "./Home"
import { LocationList } from "./locations/LocationList"
// import { AnimalCard } from "./animal/AnimalCard"
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { LocationDetail } from "./locations/LocationDetail"
import { AnimalForm } from "./animal/AnimalForm"
import { LocationForm } from "./locations/LocationForm"
import { CustomerForm } from "./customers/CustomerForm"
import { EmployeeForm } from "./employees/EmployeeForm"
import { AnimalEditForm } from "./animal/AnimalEditForm"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"


export const ApplicationViews = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

  const setAuthUser = (user) => {
    sessionStorage.setItem("kennel_customer", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
  }
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>
            {/* Render the animal list when http://localhost:3000/animals */}
            
            <Route exact path="/animals">
              {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />} 
            </Route>
            
            <Route path="/login">
              <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
              <Register setAuthUser={setAuthUser} />
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
              <AnimalDetail />
            </Route>

            <Route path="/animals/create">
              <AnimalForm />
            </Route>

            <Route path="/animals/edit/:animalId(\d+)">
              <AnimalEditForm />
            </Route>

            <Route exact path="/locations">
              <LocationList />
            </Route>
            
            <Route path="/locations/:locationId(\d+)">
              <LocationDetail />
            </Route>
            
            <Route path="/locations/create">
              <LocationForm />
            </Route>
            
            <Route exact path="/customers">
              <CustomerList />
            </Route>
            
            <Route path="/customers/create">
              <CustomerForm />
            </Route>
            
            <Route exact path="/employees">
              <EmployeeList />
            </Route>
            
            <Route path="/employees/create">
              <EmployeeForm />
            </Route>
        </>
    )
}