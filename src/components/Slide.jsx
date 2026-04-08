import React from 'react'

function Slide({title, text, button, bg}) {
  return (
    <div className={`w-full rounded-2xl ${bg}`}>
        <div className="px-[48px] py-[48px] text-white">
            <h2 className='text-[48px] font-bold leading-[100%]'>{title}</h2>
            <p className='text-[24px] font-light w-[1180px] leading-[29px] mt-[12px] h-[58px] opacity-80'>{text}</p>

            <a className='bg-[#4F46E5] rounded-[8px] px-[25px] py-[20px]  inline-block text-[20px] font-medium leading-[24px] mt-[40px]'>
                {button}
            </a>
        </div>
    </div>
  )
}

export default Slide

