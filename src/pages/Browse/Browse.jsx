import React, { useEffect, useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Link } from 'react-router-dom'
import Arrow from '../../assets/navi/arrow.png'
import X from '../../assets/navi/x.png'
import FilterCard from '../../components/filters/FilterCard'
import FilterDropDwn from '../../components/filters/FilterDropDwn'
import SortCard from '../../components/filters/SortCard'
import PaginationBtn from '../../components/pagination/PaginationBtn'

function Browse() {
    const [categories, setCategories] = useState([])
    const [topics, setTopics] = useState([])
    const [instructors, setInstructors] = useState([])
    const [courses, setCourses] = useState([])
    const [page, setPage] = useState(1)
    const [sort, setSort] = useState('newest')
    const [coursesMeta, setCoursesMeta] = useState([])
    const [topicsFilter, setTopicsFilter] = useState([])
    const [categoriesFilter, setCategoriesFilter] = useState([])
    const [instructorsFilter, setInstructorsFilter] = useState([])
    const [filterCounter, setFilterCounter] = useState(0)
    
    useEffect(() => {
        fetch('https://api.redclass.redberryinternship.ge/api/categories')
        .then(res => res.json())
        .then(data => {
            setCategories(data.data)
        })
        .catch(err => console.error(err))

        

        fetch('https://api.redclass.redberryinternship.ge/api/instructors')
        .then(res => res.json())
        .then(data => {
            setInstructors(data.data)
            // console.log(data.data);
            
        })
        .catch(err => console.error(err))

        



    }, [])

    useEffect(() => {
        const topicsQuery = topicsFilter.map(id => `categories[]=${id}`).join('&')


       
        console.log("QUERY",topicsQuery, "Filter", topicsFilter);
        
        fetch(`https://api.redclass.redberryinternship.ge/api/topics?${topicsQuery}`)
        .then(res => res.json())
        .then(data => {
            setTopics(data.data)
        })
        .catch(err => console.error(err))
    }, [topicsFilter])

    useEffect(() => {
        const topicsQuery = topicsFilter.map(id => `categories[]=${id}`).join('&')
        const categoriesQuery = categoriesFilter.map(id => `topics[]=${id}`).join('&')
        const instructorsQuery = instructorsFilter.map(id => `instructors[]=${id}`).join('&')
        
        setFilterCounter(topicsFilter.length + categoriesFilter.length + instructorsFilter.length)
        

        fetch(`https://api.redclass.redberryinternship.ge/api/courses?sort=${sort}&page=${page}&${topicsQuery}&${categoriesQuery}&${instructorsQuery}`)
        .then(res => res.json())
        .then(data => {
            setCourses(data.data)
            setCoursesMeta(data.meta)
            console.log(data.meta);
            
        })
        .catch(err => console.error(err))
    }, [page, sort, topicsFilter, categoriesFilter, instructorsFilter])

    const handleTopics = (id) => {
        setTopicsFilter((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id])
        setCategoriesFilter([])
        

        
    }
    const handleCategories = (id) => {
        setCategoriesFilter((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id])
        setTopicsFilter([])
        
    }
    const handleInstructors = (id) => {
        setInstructorsFilter((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id])
        
    }

    

    
  return (
    <MainLayout>
      <div className='flex flex-col gap-[34px] mb-[150px]'>
        <div className="flex items-center gap-[8px] text-[#666666] text-[18px] font-medium">
            <Link to="/" className="hover:underline">Home</Link>
            <img src={Arrow} alt=">" />
            <Link to="/browse" className="text-[#736BEA] hover:underline">Browse</Link>
        </div>
        <div className="flex justify-between">
            <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[32px]">
                    <div className="flex gap-[55px] items-center">
                        <p className='text-[#0A0A0A] text-[40px] leading-[48px] font-semibold'>Filters</p>
                        <div className="flex gap-[7px] items-center cursor-pointer">
                            <p className='text-[#8A8A8A] text-[16px] leading-[24px] font-medium'>Clear All Filters</p>
                            <img src={X} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[56px]">
                        <FilterCard title="Categories" data={categories} func={handleTopics}/>
                        <FilterCard title="Topics" data={topics} func={handleCategories}/>
                        <FilterCard title="Instructor" data={instructors} func={handleInstructors}/>
                    </div>
                </div>
                <div className="border-t pt-[16px] text-[#8A8A8A] text-[14px] leading-[17px] font-medium">{filterCounter} Filters Active</div>
            </div>
            <div className="flex flex-col gap-[32px] w-[1167px]">
                <div className="flex justify-between items-center">
                    <p className='text-[16px] text-[#666666] leading-[24px] font-medium'>Showing {(coursesMeta.currentPage * coursesMeta.perPage) < coursesMeta.total ? (coursesMeta.currentPage * coursesMeta.perPage) : coursesMeta.total} out of {coursesMeta.total}</p>
                    <FilterDropDwn sort={sort} setSort={setSort}/>
                </div>
                <div className="flex gap-[24px] flex-wrap">
                    {/* <SortCard />
                    <SortCard />
                    <SortCard />
                    <SortCard /> */}
                    {courses.map(course => (
                        <SortCard key={course.id} course={course} />
                    ))}
                </div>
                <div className="flex gap-[8px] mx-auto">
                    <PaginationBtn title={
                        <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.24077 4.78977L8.2635 5.80114L4.71236 9.35227L13.6328 9.35227L13.6328 10.8295L4.71236 10.8295L8.26349 14.375L7.24077 15.392L1.93963 10.0909L7.24077 4.78977Z" fill={page === 1 ? "#D1D1D1" : "#4F46E5"}/>
                        </svg>
                    } onClick={() => page > 1 && setPage(page - 1)}/>
                    {Array.from({ length: coursesMeta.lastPage }, (_, i) => (
                        <PaginationBtn
                            key={i + 1}
                            title={i + 1}
                            onClick={() => setPage(i + 1)}
                            className={page === i + 1 ? 'bg-[#281ED2]! text-[#FFFFFF] border-[#4F46E5]!' : ''}
                        />
                    ))}
                    
                    <PaginationBtn title={
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.39205 10.6028L5.36932 9.59144L8.92045 6.04031H0V4.56303H8.92045L5.36932 1.01758L6.39205 0.00053215L11.6932 5.30167L6.39205 10.6028Z" fill={page === coursesMeta.lastPage ? "#D1D1D1" : "#4F46E5"}/>
                        </svg>
                    } onClick={() => page < coursesMeta.lastPage && setPage(page + 1)}/>
                </div>
            </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Browse