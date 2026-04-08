import React from 'react'
import Logo from '../assets/Logo.png'


function Header() {
  return (
    <header className='h-auto w-full border-b border-[#D1D1D1] shadow-[0_0_11.7px_0_rgba(0,0,0,0.04)] bg-[#F5F5F5]'>
      <div className="m-auto w-[1566px] py-[24px] flex justify-between">
        <a href="/"><img src={Logo} alt="Logo"/></a>
        <div className="">d</div>
      </div>
    </header>
  )
}

export default Header