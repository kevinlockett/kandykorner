import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { SelectLocation } from './employeeLocationSelector.js'

export const EmployeeForm = () => {
    const [employee, updateEmployee] = useState({
        name: '',
        locationId: 1,
        manager: false,
        fullTime: false,
        hourlyRate: 7.25
    })

    const history = useHistory()

    const submitNewEmployee = (evt) => {
        evt.preventDefault()
        const newEmployee = {
            name: employee.name,
            locationId: employee.locationId,
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate
        }

        const fetchOption = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch('http://localhost:8088/employees', fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }

    return (
        <form className='employeeForm'>
            <h2 className='employeeForm__title'>New Employee</h2>
            <fieldset>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type='text'
                        className='form-control'
                        placeholder='Full name'
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className='form-group'>
                    <label htmlFor='location'>Location:</label>
                    <SelectLocation employee={employee} updateEmployee={updateEmployee}/>
                </div>
            </fieldset>
            <fieldset>
                <div className='form-group'>
                    <label htmlFor='manager'>Manager:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.manager = evt.target.checked
                                updateEmployee(copy)
                            }
                        }
                        type='checkbox'
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className='form-group'>
                    <label htmlFor='fullTime'>Full time:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.fullTime = evt.target.checked
                                updateEmployee(copy)
                            }
                        }
                        type='checkbox'
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className='form-group'>
                    <label htmlFor='hourlyRate'>Hourly Rate:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.hourlyRate = evt.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type='number'
                        className='form-control'
                        placeholder='7.25'
                    />
                </div>
            </fieldset>
            <button onClick={submitNewEmployee} className='btn btn-primary'>
                Hire Employee
            </button>
        </form>
    )
}