import React from 'react'
import "../styles/Brands.css"
import Newarrival from '../component/Newarrival'
import Topselling from '../component/Topselling'
import Footer from '../component/Footer'
import Like from '../component/Like'

function Brands() {
  return (
    <>
    <div className='Home'>Home > Casual</div>
    <div className='show'>Showing 1-10 Products Sorted by: </div><h5 className='most'>Most Popular </h5>
    <Like/>
    <Newarrival/>
    <Topselling/>
    <Footer/>

      </>
  )
}

export default Brands ;

