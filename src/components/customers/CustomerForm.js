import { useState } from 'react'
import { useHistory } from 'react-router-dom'


export const CustomerForm = () => {
    const [customer, updateCustomer] = useState({
        name: ''
    })
    
    const history = useHistory()

    const addCustomer = (evt) => {
        evt.preventDefault()
        const newCustomer = {
            name: customer.name
        }

        const fetchOption = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCustomer)
        }

        return fetch('https://kandy-api-tqltk.ondigitalocean.app/serviceTickets', fetchOption)
            .then(() => {
                history.push("/customers")
            })
    }

    return (
        <form className='customerForm'>
            <h2 className='customerForm__title'>New Customer</h2>
            <fieldset>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...customer}
                                copy.name = evt.target.value
                                updateCustomer(copy)
                            }
                        }
                        required autoFocus
                        type='text'
                        className='form-control'
                        placeholder="Customer's full name"
                    />
                </div>
            </fieldset>
            <button onClick={addCustomer} className='btn btn-primary'>
                Add Customer
            </button>
        </form>
    )
}