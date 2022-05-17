import { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'

export const CustomerList = () => {
    const [customers, changeCustomer] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("https://kandy-api-tqltk.ondigitalocean.app/customers")
                .then(res => res.json())
                .then((data) => {
                    changeCustomer(data)
                })
        },
        []
    )

    return (
        <>
            <div>
                <button onClick={() => history.push("/customers/create")}>
                    Add Customer
                </button>
            </div>
            {
                customers.map(
                    (customer) => {
                        return <ul key={`customer--${customer.id}`}>
                            <li>Name: {customer.name}</li>
                        </ul>
                    }
                )
            }
        </>
    )
}