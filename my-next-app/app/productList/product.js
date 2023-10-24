'use client'
import React from 'react'

const Product = ({ price }) => {
    return (
        <div><button onClick={() => alert(price)}>Click me</button></div>
    )
}

export default Product