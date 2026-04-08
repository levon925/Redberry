import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MainLayout({children}) {
  return (
    <>
    <Header />
      <main className='w-[1566px] m-auto mt-[64px] bg-[#F5F5F5]'>{children}</main>
    <Footer />
    </>
    
  )
}

export default MainLayout