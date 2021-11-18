import { useState, useEffect } from "react"

export const SelectLocation = ({employee, updateEmployee}) => {
    const [locations, setLocation] = useState ([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((data) => {
                    setLocation(data)
                })
        },
        []
    )
    
    return (
        <select
            onChange = {
                (selectEvt) => {
                    const copy = {...employee}
                    copy.locationId = parseInt(selectEvt.target.value)
                    updateEmployee(copy)
                }
            }>
                <option value="0">Select a store location</option>
                {
                    locations.map(
                        (location) => {
                            return <option key={location.id} value={location.id}>
                                {location.name}
                            </option>
                        }
                    )
                }
        </select>
    )
}