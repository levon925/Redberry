import React from 'react'
import { useState } from 'react'
import Arrow from '../../assets/filter/sort/arrow.svg'


const options = {
    data:
    [
        "Newest First",
        "Price: Low to High",
        "Price: High to Low",
        "Most Popular",
        "Title: A-Z",
    ],
    meta:
    [
        "newest",
        "price_asc",
        "price_desc",
        "popular",
        "title_asc",
    ]
}
const optionValues = [
        "newest",
        "price_asc",
        "price_desc",
        "popular",
        "title_asc",
    ]

function FilterDropDwn({sort, setSort}) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(options.data[0]);
    // const [value, setValue] = useState(options.meta[0]);

    

  return (
    <div className='relative bg-[#FFFFFF] rounded-[10px] shadow-sm cursor-pointer '>
        <div onClick={() => setOpen(!open)} className="flex gap-[8px] items-center px-[20px] py-[12.5px] ">
            <span className='text-[16px] leading-[24px] font-medium text-[#666666]'>
                Sort By: 
            </span>
            <span className='text-[#4F46E5] text-[16px] leading-[24px] font-medium '>{selected}</span>
            <img className={`w-[20px] h-[20px] transition ${open ? 'rotate-180' : 'rotate-0'}`} src={Arrow} alt="^" />
        </div>

        {open && (
            <div className="absolute mt-[3px] w-full bg-[#FFFFFF] rounded-[10px] shadow-sm z-50 overflow-hidden">
                {options.data.map((option, index) => (
                    <div className={`px-[20px] py-[12.5px] text-[16px] leading-[24px] font-medium text-[#666666] hover:text-[#4F46E5] hover:bg-[#DDDBFA]`} key={option} onClick={() => {
                        setSelected(option);
                        setSort(options.meta[index]);
                        setOpen(false);
                    }}>{option}</div>
                ))}
            </div>
        )}
    </div>
  )
}

export default FilterDropDwn