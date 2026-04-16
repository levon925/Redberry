import React from 'react'
import Star from '../../assets/card/star.png'
import development from '../../assets/filter/catergories/development.svg'
import business from '../../assets/filter/catergories/business.svg'
import design from '../../assets/filter/catergories/design.svg'
import marketing from '../../assets/filter/catergories/marketing.svg'
import datascience from '../../assets/filter/catergories/data-science.svg'
import { Link } from 'react-router-dom'

function SortCard({course}) {
    const icons = {
        development,
        business,
        design,
        marketing,
        datascience
      }
  return (
    <div className="p-[20px] bg-[#FFFFFF] rounded-[12px]">
            <div className="w-[333px] flex flex-col gap-[18px]">
                <div className="flex flex-col gap-[18px]">
                    <img className='w-full h-[181px] rounded-[10px]' src={course.image} alt="title" />
                    <div className="flex flex-col gap-[12px]">
                        <div className="flex justify-between">
                            <div className="flex text-[14px] leading-[17px] font-medium items-center gap-[8px] text-[#ADADAD]">
                                <p className=' '>{course.instructor.name}</p>
                                <div className="bg-[#ADADAD] w-[2px] h-[14px] rounded-full"></div>
                                <span className=''>{course.durationWeeks} Weeks</span>
                            </div>
                            <div className="flex gap-[4px] items-center">
                                <img className='w-[18px] h-[18px]' src={Star} alt="" />
                                <p className='text-[#525252] text-[14px] leading-[17px] font-medium'>{course.avgRating}</p>
                            </div>
                        </div>
                        <p className='text-[#141414] text-[24px] leading-[29px] font-semibold min-h-[58px]'>{course.title}</p>
                    </div>
                    <div className="w-fit text-[#666666] text-[16px] leading-[24px] font-medium flex gap-[6px] px-[12px] py-[8px] rounded-[12px] bg-[#F5F5F5]">
                        <img src={icons[course.category.icon.replace(/-/g, '')]} alt={course.category.name} />
                        <p>{course.category.name}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col ">
                        <p className='text-[#8A8A8A] text-[12px] leading-[15px] font-medium'>Starting from</p>
                        <p className='text-[#141414] text-[24px] leading-[29px] font-semibold'>$<span>{Number(course.basePrice)}</span></p>
                    </div>
                    <Link to={`/course/${course.id}`} className="px-[25px] py-[12px] bg-[#4F46E5] rounded-[8px] text-[#FFFFFF] font-medium text-[16px] leading-[24px] cursor-pointer">Details</Link>
                </div>
            </div>
        </div>
  )
}

export default SortCard