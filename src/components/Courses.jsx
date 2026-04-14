import React, { useEffect, useState } from 'react'

import CourseCard from './CourseCard'

function Courses() {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://api.redclass.redberryinternship.ge/api/courses/featured')
        .then(res => res.json())
        .then(data => {
            setCourses(data.data)
        })
        .catch(err => console.error(err))
    }, [])

  return (
    <div className='flex flex-col gap-[32px]'>
        <div className="flex flex-col gap-[6px]">
            <h1 className='text-[40px] font-semibold leading-[48px] text-[#0A0A0A]'>Start Learning Today</h1>
            <p className='text-[18px] leading-[22px] text-[#3D3D3D] font-medium'>Choose from our most popular courses and begin your journey</p>
        </div>
        <div className="flex justify-between">
            {courses.map(course => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    </div>
  )
}

export default Courses