import React from 'react'
import CTAButton from '../CTAButton';
import HighlightText from './HighlightText';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { TypeAnimation } from 'react-type-animation';
const CodeBlocks = ({position, heading, subheading ,ctabtn1, ctabtn2, codeblock,backgroundGradient , codeColr}) => {
  return (
    <div className="flex my-20 justify-between gap-10">
      {
        position?<div className='w-[50%] flex flex-col gap-8'>
            {heading}
            <div className='text-richblack-300 font-bold '>
                {subheading}
            </div>
            <div className='flex gap-7 mt-7'>
            <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                <div className='flex gap-2 items-center'>
                    {ctabtn1.btnText}
                    <MdKeyboardDoubleArrowRight/>
                </div>
            </CTAButton>

            <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>   
                    {ctabtn2.btnText}
            </CTAButton>

            </div>
        </div>:
        <div className='h-fit flex flex-row text-[20px] py-4 lg:w-[500px] w-[100%] p-2'>
           <div className=' text-center flex flex-col w-[10%] text-richblack-400 font-inter font bold'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>

           </div> 
           <div className={`flex  w-[90%] flex-col gap-2 font-bold font-mono ${codeColr} pr-2 `}>
            <TypeAnimation  sequence={[codeblock,2000,""]} repeat={Infinity} cursor={true} omitDeletionAnimation={true} style={{whiteSpace:"pre-line", display:"block"}}/>
           </div>
        </div>}



        {
            position?<div className='h-fit flex flex-row text-[20px] py-4 lg:w-[500px] w-[100%] p-2'>
           <div className=' text-center flex flex-col w-[10%] text-richblack-400 font-inter font bold'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>

           </div> 
           <div className={`flex  w-[90%] flex-col gap-2 font-bold font-mono ${codeColr} pr-2 `}>
            <TypeAnimation  sequence={[codeblock,2000,""]} repeat={Infinity} cursor={true} omitDeletionAnimation={true} style={{whiteSpace:"pre-line", display:"block"}}/>
           </div>
        </div>:<div className='w-[50%] flex flex-col gap-8'>
            {heading}
            <div className='text-richblack-300 font-bold '>
                {subheading}
            </div>
            <div className='flex gap-7 mt-7'>
            <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                <div className='flex gap-2 items-center'>
                    {ctabtn1.btnText}
                    <MdKeyboardDoubleArrowRight/>
                </div>
            </CTAButton>

            <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>   
                    {ctabtn2.btnText}
            </CTAButton>

            </div>
        </div>
        
      }
    </div>
  )
}

export default CodeBlocks
