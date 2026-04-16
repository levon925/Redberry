import React from 'react'
import Logo from '../assets/Logo.png'
import Browse from '../assets/header/Browse.png'
import Modal from './Modal'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Header() {
  const [showModal, setShowModal] = useState(false)
  return (
    <header className='h-auto w-full border-b border-[#D1D1D1] shadow-[0_0_11.7px_0_rgba(0,0,0,0.04)] bg-[#F5F5F5]'>
      <div className="m-auto w-[1566px] py-[24px] flex justify-between">
        <Link to="/"><img src={Logo} alt="Logo"/></Link>
        <div className="flex gap-[50px]">
          <Link to="/browse" className='flex gap-[8px] text-[20px] text-[#525252] font-medium items-center'>
            <img src={Browse} alt="Browse"/>
            <span>Browse Courses</span>
          </Link>
          <div className="flex gap-[15px] text-white">
            <button className='text-[#4F46E5] border-2 border-[#4F46E5] px-[27.5px] py-[18px] rounded-[8px] font-medium text-[20px] leading-[100%] cursor-pointer'>Log In</button>
            <button className='bg-[#4F46E5] px-[25px] py-[18px] font-medium text-[20px] rounded-[8px] leading-[100%] cursor-pointer' onClick={() => setShowModal(true)}>Sign Up</button>
          </div>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
    </header>
  )
}

export default Header

