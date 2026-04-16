import React, { useState } from 'react'
import FilterBtn from './FilterBtn'

function FilterCard({title,data, onClick}) {
    const [selected, setSelected] = useState([]);

    const toggle = (name) => {
        setSelected((prev) => prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]);
        console.log(selected);
        
    }
  return (
    <div className='flex flex-col gap-[24px]'>
        <p className='text-[#666666] text-[18px] leading-[22px] font-medium'>{title}</p>
        <div className="flex gap-[8px] flex-wrap w-[309px]">
            {data.map(data => (
                <FilterBtn key={data.id} data={data} selected={selected} toggle={toggle}/>
            ))}
            {/* <FilterBtn title="React"/>
            <FilterBtn />
            <FilterBtn />
            <FilterBtn />
            <FilterBtn /> */}
        </div>
    </div>
  )
}

export default FilterCard