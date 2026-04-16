import React, { useEffect, useState} from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Link, useParams } from 'react-router-dom'
import Arrow from '../../assets/navi/arrow.png'
import Calendar from '../../assets/course/calendar.svg'
import Clock from '../../assets/course/clock.svg'
import Arrow2 from '../../assets/course/arrow.svg'
import Star from '../../assets/card/star.png'
import development from '../../assets/filter/catergories/development.svg'
import business from '../../assets/filter/catergories/business.svg'
import design from '../../assets/filter/catergories/design.svg'
import marketing from '../../assets/filter/catergories/marketing.svg'
import datascience from '../../assets/filter/catergories/data-science.svg'


function Course() {
    const {id} = useParams()
    const [course, setCourse] = useState({})
    const [schedule, setSchedule] = useState([])
    useEffect(() => {
            
            fetch(`https://api.redclass.redberryinternship.ge/api/courses/${id}`)
            .then(res => res.json())
            .then(data => {
                setCourse(data.data)
                
                console.log("dede", data.data);
                
                
            })
            .catch(err => console.error(err))
        },[])

    useEffect(() => {
            
            fetch(`https://api.redclass.redberryinternship.ge/api/courses/${id}/weekly-schedules`)
            .then(res => res.json())
            .then(data => {
                setSchedule(data.data)
                
                console.log("dede", schedule);
                
                
            })
            .catch(err => console.error(err))
        },[course])

    const avgRating = (course?.reviews?.reduce((sum, r) => sum + r.rating, 0) / course?.reviews?.length).toFixed(1)

    const icons = {
        development,
        business,
        design,
        marketing,
        datascience
    }
    const formatLabel = (label) => {
        if (!label) return "";

        
        if (label.includes('Weekend')) return "Weekend";
        
        return label.split(" - ").map(day => day.trim().slice(0,3)).join(" - ");
        
    }
  return (
    <MainLayout>
        <div className="flex w-full justify-between mb-[213px]">
            <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[32px] ">
                    <div className="flex items-center gap-[8px] text-[#666666] text-[18px] font-medium">
                        <Link to="/" className="hover:underline">Home</Link>
                        <img src={Arrow} alt=">" />
                        <Link to="/browse" className=" hover:underline">Browse</Link>
                        <img src={Arrow} alt=">" />
                        <Link to="/browse" className="text-[#736BEA] hover:underline">{course?.category?.name}</Link>
                    </div>
                    <p className="text-[#141414] text-[40px] leading-[48px] font-semibold">{course.title}</p>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <img className='w-[903px] rounded-[10px]' src={course.image} alt="" />
                    <div className="flex justify-between">
                        <div className="flex text-[#525252] text-[14px] leading-[17px] font-medium  gap-[12px]">
                            <div className="flex items-center gap-[4px]">
                                <img src={Calendar} alt="" />
                                <p>{course.durationWeeks} Weeks</p>
                            </div>
                            <div className="flex items-center gap-[4px]">
                                <img src={Clock} alt="" />
                                <p>{course.hours} Hours</p>
                            </div>
                        </div>
                        <div className="flex gap-[16px] text-[#525252] font-medium">
                            <div className="flex gap-[4px] items-center text-[14px] leading-[21px]">
                                <img className="w-[22px] h-[21px]" src={Star} alt="" />
                                <p>{avgRating}</p>
                            </div>
                            <div className="flex gap-[10px] text-[#666666] text-[16px] leading-[24px] font-medium px-[12px] py-[7.5px] bg-[#FFFFFF] rounded-[12px] items-center">
                                <img src={icons[course?.category?.icon.replace(/-/g, "")]} alt="" />
                                <p>{course?.category?.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[18px]">
                    <div className="flex w-fit gap-[10px] text-[#666666] text-[16px] leading-[24px] font-medium px-[12px] py-[7.5px] bg-[#FFFFFF] rounded-[12px] items-center">
                        <img className='w-[30px] h-[30px] rounded-[4px] object-cover ' src={course?.instructor?.avatar} alt="" />
                        <p>{course?.instructor?.name}</p>
                    </div>
                    <div className="flex flex-col gap-[24px] w-[903px]">
                        <p className='text-[#8A8A8A] text-[20px] leading-[24px] font-semibold'>Course Description</p>
                        <p className='text-[#525252] text-[16px] leading-[24px] font-medium'>{course.description}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[12px] w-[530px] mt-[125px]">
                <div className="bg-[#ffffff] flex flex-col gap-[32px]">
                    <div className="flex flex-col gap-[18px]">
                        <div className="flex justify-between">
                            <div className="flex gap-[8px] items-center">
                                {/* <p className='rounded-full border-[1.5px] border-[#130E67] w-[22px] h-[22px] text-[10px] text-[#130E67] leading-[10px] text-center flex justify-center items-center'>1</p> */}
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.4541 2.70312C17.5704 2.70313 20.5591 3.94098 22.7627 6.14453C24.9662 8.34808 26.2041 11.3368 26.2041 14.4531C26.2041 15.996 25.9 17.5237 25.3096 18.9492C24.7191 20.3748 23.8538 21.6706 22.7627 22.7617C21.6716 23.8528 20.3758 24.7181 18.9502 25.3086C17.5247 25.899 15.997 26.2031 14.4541 26.2031C12.9112 26.2031 11.3835 25.899 9.95801 25.3086C8.53243 24.7181 7.2366 23.8528 6.14551 22.7617C5.05442 21.6706 4.18913 20.3748 3.59863 18.9492C3.00823 17.5237 2.7041 15.996 2.7041 14.4531C2.7041 11.3368 3.94196 8.34808 6.14551 6.14453C8.34906 3.94098 11.3378 2.70312 14.4541 2.70312Z" stroke="#130E67" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.8786 18.6866V9.3125L11.6562 11.656" stroke="#0A0836" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className='text-[#130E67] text-[24px] leading-[29px] font-semibold'>Weekly Schedule</p>
                            </div>
                            <img src={Arrow2} alt="" />
                        </div>
                        <div className="flex gap-[12px]">
                            {schedule?.map(data => (
                                <div key={data.id} className="text-[#292929] text-[16px] leading-[19px] font-semibold w-[123.5px] bg-[#FFFFFF] rounded-[12px] border border-[#D1D1D1] text-center py-[36px]">{formatLabel(data?.label)}</div>
                            ))}
                            {/* <div className="text-[#292929] text-[16px] leading-[19px] font-semibold w-[123.5px] bg-[#FFFFFF] rounded-[12px] border border-[#D1D1D1] text-center py-[36px]">Mon - Wed</div> */}
                            {/* <div className="text-[#292929] text-[16px] leading-[19px] font-semibold w-[123.5px] bg-[#FFFFFF] rounded-[12px] border border-[#D1D1D1] text-center py-[36px]">Mon - Wed</div> */}
                            {/* <div className="text-[#292929] text-[16px] leading-[19px] font-semibold w-[123.5px] bg-[#FFFFFF] rounded-[12px] border border-[#D1D1D1] text-center py-[36px]">Mon - Wed</div> */}
                            {/* <div className="text-[#292929] text-[16px] leading-[19px] font-semibold w-[123.5px] bg-[#FFFFFF] rounded-[12px] border border-[#D1D1D1] text-center py-[36px]">Mon - Wed</div> */}
                        </div>
                    </div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
                <div className="">2</div>
            </div>
        </div>
    </MainLayout>
  )
}

export default Course