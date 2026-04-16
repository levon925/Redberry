import React from 'react'
import development from '../../assets/filter/catergories/development.svg'
import business from '../../assets/filter/catergories/business.svg'
import design from '../../assets/filter/catergories/design.svg'
import marketing from '../../assets/filter/catergories/marketing.svg'
import datascience from '../../assets/filter/catergories/data-science.svg'

function Categories({data, selected, toggle}) {
  const icons = {
    development,
    business,
    design,
    marketing,
    datascience
  }
  const isActive = selected.includes(data.name);

  return (
    <label className="cursor-pointer! hover:text-[#281ED2]">
      <input
        type="checkbox"
        className="hidden"
        checked={isActive}
        onChange={() => toggle(data.name)}
      />

      <div
        className={`flex gap-[12px] bg-[#FFFFFF] rounded-[12px] px-[12px] py-[8px] items-center transition hover:bg-[#DDDBFA] !hover:text-[#281ED2]
        ${
          isActive
            ? "border border-blue-500 bg-blue-50"
            : "border border-transparent"
        }`}
      >
        {data.icon && (
          <img
            className="w-[24px]"
            src={icons[data.icon.replace(/-/g, "")]}
            alt={data.icon}
          />
        )}

        {data.avatar && (
          <img
            className="w-[30px] h-[30px] object-cover rounded-[4px]"
            src={data.avatar}
            alt={data.name}
          />
        )}

        <p
          className={`text-[16px] leading-[24px] font-medium hover:text-[#281ED2] ${
            isActive ? "text-blue-600" : "text-[#666666]"
          }`}
        >
          {data.name}
        </p>
      </div>
    </label>
    
  )
}

export default Categories