import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Banner from './components/Banner/Banner'
import earphones from "./assets/category/ayaChibi.png"
import Products from './components/Products/Products'

const BannerData= {
  discount: "30% OFF",
  title: "SUMMER SALE",
  date: "10 Jan to 28 Jan",
  image: earphones,
  title2: "Air Solo Bass",
  title3: "Air Solo Bass",
  title4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut assumenda ex accusantium! Alias enim cum possimus fugiat amet similique recusandae ullam ea vero quaerat, eius, nihil earum, ad nisi laudantium?",
  bgColor: "#f42c37",
};


const App = () => {
  return <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
    <Navbar/>
    <Hero/>
    <Category/>
    <Category2/> 
    <Banner data={BannerData}/> 
    <Products/>
  </div>
}

export default App