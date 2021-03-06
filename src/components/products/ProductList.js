import { useState, useEffect } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch("https://kandy-api-tqltk.ondigitalocean.app/products?_expand=productType&_embed=productType.type")
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