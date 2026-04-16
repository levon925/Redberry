import React from 'react'

function PaginationBtn({title, onClick,className}) {
  return (
    <div onClick={onClick} className={`bg-[#FFFFFF] w-[40px] h-[40px] flex justify-center items-center rounded-[4px] border border-[#D1D1D1] text-[#4F46E5] text-[16px] leading-[24px] font-medium cursor-pointer hover:bg-[#DDDBFA] hover:border-[#B7B3F4] ${className}`}>{title}</div>
  )
}

export default PaginationBtn