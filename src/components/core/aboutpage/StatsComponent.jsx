import React from 'react'
const Stats =[
    {count:"5k", label: "Active Students" },
    {count:"10+", label: "Mentors" },
    {count:"200+", label: "Courses" },
    {count:"50+", label: "Awards" },

]
const StatsComponent = () => {
  return (
    <div className='flex bg-richblack-600 items-center justify-center mx-auto gap-4'>
       {
        Stats.map((data,index)=>{
return(
    <div key={index} className='flex flex-col justify-center items-center  '>
       <h1 className='text-white'>{data.count}</h1>
       <h2 className=' text-pure-greys-300 text-sm'>{data.label}</h2>
    </div>
)
        })
       }
    </div>
  )
}

export default StatsComponent
