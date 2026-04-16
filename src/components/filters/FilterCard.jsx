import React, { useEffect, useState } from 'react'
import FilterBtn from './FilterBtn'

function FilterCard({title,data, onClick, func}) {
    const [selected, setSelected] = useState([]);

    const toggle = (name, id) => {
        

        setSelected((prev) => prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]);
        console.log(selected);
        func(id)
        console.log(id);
        
        
    }

    useEffect(() => {
        setSelected(prev => prev.filter(name => data.some(item => item.name === name)))
    }, [data])
  return (
    <div className='flex flex-col gap-[24px]'>
        <p className='text-[#666666] text-[18px] leading-[22px] font-medium'>{title}</p>
        <div className="flex gap-[8px] flex-wrap w-[309px]">
            {data.map(data => (
                <FilterBtn key={data.id} data={data} selected={selected} toggle={() => toggle(data.name, data.id)} onClick={onClick}/>
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