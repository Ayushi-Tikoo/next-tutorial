import React from 'react'
import Product from './product';

async function productListAPI() {
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json();
    return data.products
}

const ProductList = async () => {
    let products = await productListAPI()
    console.log("products length:-----------", products.length)
    return (
        <div>
            <h1>Product List</h1>
            {
                products.map((item) => {
                    return (
                        <div>
                            <h3>
                                Name: {item.title}
                            </h3>
                            <Product price={item.price}/>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default ProductList

/*
The main difference between server and client component is:
    1. The API call made to fetch data will now not be visible in the network tab of the browser
    2. All the console log will not be visible in the console tab of the browser

Why we have to use client components
    1. events(onCLick, onChange) will not work in server components
    2. Hooks useState, useEffect will not work in server components

Why don't we only use client components
    We can do that, but then it would be better to use react as most powerful thing of next.js is
    server side rendering
*/