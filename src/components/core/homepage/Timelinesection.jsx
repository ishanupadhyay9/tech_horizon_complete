import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import img2 from "../../../assets/Images/TimelineImage.png";
const timeline = [
    {Logo:Logo1,
     heading:"Leadership",
     Description:"develops leaders with optimum skills and knowledge"
    },
    {Logo:Logo2,
        heading:"Leadership",
        Description:"develops leaders with optimum skills and knowledge"
       },
       {Logo:Logo3,
        heading:"Leadership",
        Description:"develops leaders with optimum skills and knowledge"
       },
       {Logo:Logo4,
        heading:"Leadership",
        Description:"develops leaders with optimum skills and knowledge"
       }
]
const Timelinesection = () => {
  return (
    <div className='flex flex-row mx-auto   gap-15 items-center justify-center '>
      <div className='flex flex-col w-[45%] gap-5'>
{
    timeline.map((val,index)=>{
        return(<div key={index} className='flex flex-row gap-6'>
       
            <div  className='h-[50px] w-[50px] bg-white flex items-center justify-center'>
                <img src={val.Logo}/>
            </div>
       
        <div className='flex flex-col'>
        <h2 className='font-semibold text-[18px] text-blue-700'>{val.heading}</h2>
        <div className='text-base text-richblack-400'>{val.Description}</div>
        </div>
     </div>)})
}
      </div>
      <div className=' relative self-start shadow-blue-200' >
  <img src={img2} className='h-[500px] w-[550px] '/>
  <div className='absolute mx-auto bottom-[-8%] left-[3%]  px-10 py-4 flex bg-caribbeangreen-700 flex-row text-white uppercase gap-2'>
<div className='flex flex-row gap-5 items-center border-r p-3 border-caribbeangreen-300'>
    <div className='text font-bold'>10</div>
    <div className=' text-caribbeangreen-300 text-sm'>Years of Experience</div>
</div>

<div className='flex flex-row gap-5 items-center '>
    <div className='text font-bold'>250</div>
    <div className=' text-caribbeangreen-300 text-sm'>Types of coursess</div>
</div>
  </div>
      </div>
    </div>
  )
}

export default Timelinesection
