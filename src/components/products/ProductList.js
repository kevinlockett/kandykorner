import React, { useState, useEffect } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId&_order=asc")
                .then(res => res.json())
                .then((data) => {
                    setProducts(data)
                })
        },
        []
    )

    return (
        <>
            {
                products.map(
                    (product) => {
                        return <ul key={`product--${product.id}`}>
                        <li>Product Type: {product.productType.type}</li>
                        <li>Product: {product.product}</li>
                        <li>Price: {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</li>
                        </ul>
                    }
                )
            }
        </>
    )
}