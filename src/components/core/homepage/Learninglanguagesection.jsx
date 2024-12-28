import React from 'react'
import HighlightText from './HighlightText';
import pimg from "../../../assets/Images/Know_your_progress.png";
import cimg from "../../../assets/Images/Compare_with_others.png";
import plimage from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from '../CTAButton';
const Learninglanguagesection = () => {
  return (
    <div>
      <div className='flex flex-col gap-5 mt-[150px] w-11/12 mx-auto pb-[30px]'>
        <div className=' text-4xl font-semibold text-center'>
            Your Swiss Knife for <HighlightText text={" learning any language"}/>
            <div className='text-center w-[80%] mt-3 text-richblack-600 mx-auto text-base'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</div>

            <div className='flex flex-row item-center justify-center mt-5 ml-5'>
                <img src={pimg} alt="Know your progress" className=' object-contain'/>
                <img src={cimg} alt="Know your progress" className=' object-contain'/>
                <img src={plimage} alt="Know your progress" className=' object-contain'/>

            </div>
            <div className='w-fit h-[75px] mx-auto'> <CTAButton active={true} linkto={"/signup"} >Learn More</CTAButton>
</div>

        </div>
      </div>
    </div>
  )
}

export default Learninglanguagesection
