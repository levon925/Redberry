import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import Slider from '../../components/Slider'
import Courses from '../../components/Courses'

function Home() {
  return (
    <MainLayout className="flex flex-col gap-[64px] mb-[248px]">
      <Slider />
      {/* <div className="">f</div> */}
      <Courses />
      <Courses />
    </MainLayout>
  )
}

export default Home