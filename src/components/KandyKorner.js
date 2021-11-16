import React from 'react'
import { LocationList } from "./locations/LocationList.js"
import { ProductList } from "./products/ProductList.js"

export const KandyKorner = () => {

    return (
        <>
            <h1>Kandy Korner</h1>

            <h2>Store Locations</h2>
            <LocationList/>

            <h2>Products</h2>
            <ProductList/>


        </>
    )
}