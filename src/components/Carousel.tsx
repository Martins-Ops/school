import React from 'react'
import logo from '../assets/images/slider1.jpg'
import bg from '../assets/images/sliderbg.png'

function Carousel() {
  return (
  <div className="relative">
  <img className="w-full h-screen object-cover" src={logo} alt="School logo" />


<div className="absolute top-1/2 left-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
     <img className="object-cover" src={bg} alt="School logo" />
</div>
  <div className="absolute top-1/2 left-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
    <p className="text-3xl font-bold">Featured notification</p>
    <p className="text-xl">Education is key to success</p>
    <p className="text-lg">Making an impact in the classroom and community</p>
  </div>
</div>

  )
}

export default Carousel