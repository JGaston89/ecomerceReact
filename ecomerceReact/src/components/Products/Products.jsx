import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'

import Img1 from "../../assets/products/imagen1.jpg"
import Img2 from "../../assets/products/imagen2.jpg"
import Img3 from "../../assets/products/imagen3.jpg"
import Img4 from "../../assets/products/imagen4.jpg"

const ProductsData= [
    {
        id:1,
        img:Img1,
        title:"Beats Solo",
        price: "100",
        aosDelay: "0",
    },
    {
        id:2,
        img:Img2,
        title:"Beats Solo",
        price: "100",
        aosDelay: "0",
    },
    {
        id:3,
        img:Img3,
        title:"Beats Solo",
        price: "100",
        aosDelay: "0",
    },
    {
        id:4,
        img:Img4,
        title:"Beats Solo",
        price: "100",
        aosDelay: "0",
    },
]
const Products = () => {
  return (
    <div>
        <div className="container">
            <div className="grid">
                {/* Header Section */}
                <Heading title="Our Products" subtitle={"Explote Our Products"}/>
                {/* Body Section  */}
                <ProductCard data={ProductsData}/>
            </div>
        </div>
    </div>
  )
}

export default Products