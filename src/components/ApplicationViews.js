import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/EmployeeList.js"
import { EmployeeForm } from "./employees/employeeForm/EmployeeForm.js"
import { LocationList } from "./locations/LocationList.js"
import { ProductList } from "./products/ProductList.js"
import { CustomerList } from "./customers/CustomerList.js"

export const ApplicationViews = () => {
    return (
        <>
            <h1>Kandy Korner</h1>
            
            <Route path="/locations">
                <LocationList />
            </Route>
            
            <Route path="/products">
                <ProductList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>

            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route path="/customers/create">
                <CustomerList />
            </Route>

        </>
    )
}