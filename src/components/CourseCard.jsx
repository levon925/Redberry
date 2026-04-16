import React from 'react'
import Star from '../assets/card/star.png'
import { Link } from 'react-router-dom'

function CourseCard({course}) {
  return (
    <div className="p-[20px] bg-[#FFFFFF] rounded-[12px]">
        <div className="w-[466px] flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[16px]">
                <img className='w-full h-[262px] rounded-[10px]' src={course.image} alt={course.title} />
                <div className="flex flex-col gap-[12px]">
                    <div className="flex justify-between">
                        <p className='text-[#8A8A8A] text-[14px] leading-[17px] font-medium'>Lecturer <span className='text-[#666666]'>{course.instructor.name}</span></p>
                        <div className="flex gap-[4px] items-center">
                            <img className='w-[18px] h-[18px]' src={Star} alt="" />
                            <p className='text-[#525252] text-[14px] leading-[17px] font-medium'>{course.avgRating}</p>
                        </div>
                    </div>
                    <p className='text-[#141414] text-[24px] leading-[29px] font-semibold'>{course.title}</p>
                </div>
                <p className="w-[400px] text-[#666666] text-[16px] leading-[24px] font-medium">{course.description}</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-[8px] items-center">
                    <p className='text-[#8A8A8A] text-[12px] leading-[15px] font-medium'>Starting from</p>
                    <p className='text-[#141414] text-[32px] leading-[39px] font-semibold'>$<span>{course.basePrice}</span></p>
                </div>
                <Link to={`/course/${course.id}`} className="px-[25px] py-[17px] bg-[#4F46E5] rounded-[8px] text-[#FFFFFF] font-medium text-[20px] leading-[24px] cursor-pointer">Details</Link>
            </div>
        </div>
    </div>
  )
}

export default CourseCard