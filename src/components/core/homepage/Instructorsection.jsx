import React from 'react'
import inimg from "../../../assets/Images/Instructor.png";
import HighlightText from './HighlightText';
import CTAButton from '../CTAButton';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Instructorsection = () => {
  return (
    <div className='flex mt-16 flex-row mx-auto gap-20 items-center mb-15 justify-center'>
      <div className='w-[40%]'>
<img src={inimg} className=' shadow-white'/>
      </div>

      <div className='w-[50%] flex flex-col gap-10 px-10'>
      <div className='text-4xl'>Become an <br/> <HighlightText text={" Instructor"}/></div>
    <div className=' font-medium text-[16px] w-[80%] text-richblack-300'>Instructor from around the world teach millions os students on Tech Horizon. We provide the tools and skills to teach what you love.</div>
<div className=' w-fit'>
<CTAButton active={true} linkto={"/signup"}>
        <div className='flex flex-row justify-center items-center gap-3  ap-2'>
        Start Learning
            <MdKeyboardDoubleArrowRight/>
        </div>
    </CTAButton>
</div>
      </div>
    </div>
  )
}

export default Instructorsection
