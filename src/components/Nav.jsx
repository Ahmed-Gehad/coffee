import React, { useState } from 'react'
import { logo } from '../assets'
import { Link } from 'react-router-dom'

const Links = [
  { id: 1, page: "Home", path: "/" },
  { id: 2, page: "About", path: "/about" },
  { id: 3, page: "Contact", path: "/contact" },
  { id: 4, page: "Support", path: "/support" },
  { id: 5, page: "Pricing", path: "/pricing" },
]

// import icon 
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from 'react-icons/io5';


const Nav = () => {

  const [openBar, setOpenBar] = useState(false)



  return (

    <div className=' bg-[#3f181c] h-[70px] px-5'>
      <div className='container mx-auto text-white flex items-center justify-between h-full'>

        {/* logo */}
        <div className='flex items-center gap-3'>
          <img src={logo} alt="logo" className='w-10 ' />
          <h1 className='text-2xl font-bold'>Coffee</h1>
        </div>

        {/* Links */}
        <ul className='hidden mdl:flex items-center gap-8 '>
          {Links.map((link) => (

            <li key={link.id} className='px-2 py-2 hover:bg-[#7b3f45ad]
             hover:text-orange-300  transition duration-500 rounded'>
              <Link to={link.path}>
                {link.page}
              </Link>
            </li>

          ))}
        </ul>

        {/* Button  */}
        <div className='hidden mdl:flex gap-4'>
          <button className=' px-4 py-2 rounded font-medium border 
          hover:border-orange-500  hover:text-orange-300  transition duration-500'>
            Get Started
          </button>
        </div>



        {/* icon bar */}
        <div
          className='mdl:hidden cursor-pointer'
          onClick={() => setOpenBar(!openBar)}
        >
          {!openBar ? (
            <FaBars fontSize="28px" className='hover:text-orange-300  transition duration-500' />
          ) : (
            <IoCloseSharp fontSize="30px" className='hover:text-orange-300  transition duration-500' />
          )}
        </div>

      </div>

      {/* mobile menu  */}
      <div
        className={`fixed top-0 right-0 text-white bg-[#3f181c] w-[200px] h-[100vh] transform ${openBar ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out `}>


        {/* close icon  */}
        <div
          className='absolute top-6 left-3 font-medium cursor-pointer'
          onClick={() => setOpenBar(false)}
        >
          <IoCloseSharp fontSize="28px" className='hover:text-orange-300  transition duration-500' />
        </div>

        {/* retrieve data links  */}
        <ul className='flex flex-col  gap-7 px-4 mt-16'>
          {Links.map((link) => (
            <li key={link.id}
              className='px-2 py-2 hover:bg-[#7b3f45ad]
             hover:text-orange-300  transition duration-500 rounded'>
              <Link to={link.path}>
                {link.page}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button  */}
        <div className='flex flex-col mt-7 px-4 gap-4'>
          <button className=' px-4 py-2 rounded font-medium border 
          hover:border-orange-500  hover:text-orange-300  transition duration-500'>
            Get Started
          </button>
        </div>

      </div>

    </div>
  )
}

export default Nav