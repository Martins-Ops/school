import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import logo from '../assets/images/logo.png'
import {FaPhoneAlt} from "react-icons/fa";
import {AiOutlineMail,AiOutlineLogin} from 'react-icons/ai'
import {BiLogIn, BiMenuAltRight} from 'react-icons/bi'
import {ImCancelCircle} from 'react-icons/im' 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <div className='bg-teal-500 w-full h-12 px-20 pt-3' >

        <div className='flex gap-6 md:gap-24' >
        <span className='flex gap-4'>
          <FaPhoneAlt className='text-white mt-1' />
          <p className='text-white'>090-234-3923</p>
        </span>
           <span className='flex gap-4'>
          <AiOutlineMail className='text-white mt-1' />
         <p className='text-white'>school@gmail.com</p>
        </span>        
        </div>
       
          <div className='hidden lg:block absolute right-20 top-3'>

            <div className='flex gap-6 md:gap-24' >
        <span className='flex gap-4'>
          <BiLogIn className='text-white mt-1' />
          <p className='text-white'>Login</p>
        </span>
           <span className='flex gap-4'>
          <AiOutlineLogin className='text-white mt-1' />
         <p className='text-white pointer'>register</p>
        </span>        
        </div>
            
          </div>

      </div>
          <header className="fixed w-full bg-white shadow-lg z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img className="h-8 w-auto mr-2" src={logo} alt="School logo" />
         
          </div>
          <div className="hidden md:block">
            <nav className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contacts</a>
            </nav>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="block text-gray-500 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
        {!isOpen ? <BiMenuAltRight className='w-8 h-8' />:

         <h2 className=' text-2xl'>X</h2>}
        </button>


<Transition
    show={isOpen}
    enter="transition ease-out duration-200 transform"
    enterFrom="-translate-x-full"
    enterTo="translate-x-0"
    leave="transition ease-in duration-200 transform"
    leaveFrom="translate-x-0"
    leaveTo="-translate-x-full"
    className="absolute top-0 w-1/2 left-0 z-10 md:hidden"
  >
    <div>
      <nav className="bg-white px-2 py-3 h-screen shadow">
         <img className="h-8 mx-auto mb-12 mt-4" src={logo} alt="School logo" />
        <a href="#" className="block text-gray-600 hover:text-gray-900 py-2">Home</a>
        <a href="#" className="block text-gray-600 hover:text-gray-900 py-2">About</a>
        <a href="#" className="block text-gray-600 hover:text-gray-900 py-2">Services</a>
        <a href="#" className="block text-gray-600 hover:text-gray-900 py-2">Contacts</a>
      </nav>
    </div>
  </Transition>

          </div>
        </div>
      </div>
    </header>
    </div>
  
  );
};

export default Header;



