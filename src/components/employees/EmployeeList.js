import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    return (
        <>
            <div>
                <button onClick={() => history.push("/employees/create")}>
                    Hire Employee
                </button>
            </div>
            {
                employees.map(
                    (employee) => {
                        return <ul key={`employee--${employee.id}`}>
                        <li>Name: {employee.name}</li>
                        <li>Location: {employee.location.name}</li>
                        <li>Manager: {`${employee.manager}`} </li>
                        <li>Full Time: {`${employee.fullTime}`}</li>
                        <li>Hourly Rate: {employee.hourlyRate.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</li>
                        </ul>
                    }
                )
            }
        </>
    )
}