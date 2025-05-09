import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import ProductCard from '../components/ProductCard'
import BottomBanner from '../components/BottomBanner'
import  NewsLetter  from '../components/NewsLetter'

const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner/>
        <Categories/>
        <BestSeller />
        <ProductCard />
        <BottomBanner />
        <NewsLetter />
        
    </div>
  )
}

export default Home