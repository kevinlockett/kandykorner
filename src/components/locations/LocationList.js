import { useState, useEffect } from "react"

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((data) => {
                    setLocations(data)
                })
        },
        []
    )

    return (
        <>
            {
                locations.map(
                    (location) => {
                        return <div key={`location--${location.id}`}>
                            {location.name} at {location.address}
                        </div>
                    }
                )
            }
        </>
    )
}