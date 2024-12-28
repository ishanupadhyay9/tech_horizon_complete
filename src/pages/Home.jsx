import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import HighlightText from '../components/core/homepage/HighlightText';
import CTAButton from '../components/core/CTAButton';
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from '../components/core/homepage/CodeBlocks';
import Timelinesection from '../components/core/homepage/Timelinesection';
import Learninglanguagesection from '../components/core/homepage/Learninglanguagesection';
import Instructorsection from '../components/core/homepage/Instructorsection';
import Footer from '../components/core/common/Footer';
import ExploreMore from '../components/core/homepage/ExploreMore';
const Home = () => {
  return (
    <div>
    {/* section 1 */}
    <div className=' relative  mx-auto flex flex-col w-11/12  items-center text-white justify-between ' >

       <Link to={"/signup"}>
        <div className=' group rounded-full mt-16 p-1 mx-auto rouded-full bg-richblack-800 font-bold text-right'>
            <div className='flex  gap-2 items-center justify-center mx-auto rounded-full  p-1 bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover::scale-95 group-hover:bg-richblue-400'>
                <p> Become an Instructor</p>
                <MdOutlineKeyboardDoubleArrowRight/>
            </div>
            </div>
            </Link>
            
            <div className='text-center text-4xl  mt-8 font-semibold'>
              Empower Your Future with  <HighlightText text={"Coding Skills"}/>
            </div>
             
            <div className="w-[80%]  mt-4 text-lg font-bold text-richblack-200 text-center">
            <HighlightText text={"Tech Horizon "} />offers interactive lessons, hands-on coding practice, personalized learning paths, skill development for all levels, real-world projects, collaborative community, up-to-date curriculum, flexible learning, and career advancement opportunities.
            </div>

            <div className='flex flex-row gap-7 mt-8'>
            <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
            <CTAButton>Book a Demo</CTAButton>


            </div>

            <div className='shadow-white mx-3 my-12 '>
              <video muted loop autoPlay >
<source src={Banner} type="video/mp4"/>
              </video>
            </div>

         {/*code section 1*/}
         <div>
          <CodeBlocks 
          position={true}
          heading={
            <div className='text-4xl font-semibold'>Unlock your <HighlightText text={"coding potential "} /> with our online courses</div> 
          }
          subheading={"Our coding courses provide comprehensive, hands-on learning experiences across various programming languages. From beginner to advanced levels, they offer practical projects, expert guidance, and personalized support to help students excel."}

          ctabtn1={{
            btnText:"try it yourself",
            linkto: "/signup",
            active:true,
          }}

          ctabtn2={{
            btnText:"learn more",
            linkto: "/login",
            active:false,
          }}
          codeblock={`<!DOCTYPE HTML>\n<html>\n<head>\n<title>Examples</title>\n <link rel= "stylesheet" href="styles.css">\n</title>\n</head>\n</html>`}
          codeColr={"text-yellow-25"}
           />

<CodeBlocks 
          position={false}
          heading={
            <div className='text-4xl font-semibold'>Unlock your <HighlightText text={"coding potential "} /> with our online courses</div> 
          }
          subheading={"Our coding courses provide comprehensive, hands-on learning experiences across various programming languages. From beginner to advanced levels, they offer practical projects, expert guidance, and personalized support to help students excel."}

          ctabtn1={{
            btnText:"try it yourself",
            linkto: "/signup",
            active:true,
          }}

          ctabtn2={{
            btnText:"learn more",
            linkto: "/login",
            active:false,
          }}
          codeblock={`<!DOCTYPE HTML>\n<html>\n<head>\n<title>Examples</title>\n <link rel= "stylesheet" href="styles.css">\n</title>\n</head>\n</html>`}
          codeColr={"text-yellow-25"}
           />
         </div>
<ExploreMore/>
    </div>
            {/*section 2*/} 
  
    <div className=' bg-pure-greys-5 text-richblack-700 w-11/12 mx-auto mb-10'>
<div className='homepage_bg h-[333px] '>
<div className='w-11/12 max-w-maxContent flex justify-center items-center gap-5 mx-auto'>
  <div className='flex flex-row gap-7 mt-[150px] text-white'>
  
  <CTAButton active={true} linkto={"/signup"}> <div className='flex mx-aut gap-2 items-center'>
    Explore Full Catalog
    <MdOutlineKeyboardDoubleArrowRight/>
    
  </div></CTAButton>


<CTAButton active={false} linkto={"/signup"}>
  Learn more
</CTAButton>

  </div>
</div>

</div>

<div className=' w-11/12 mx-auto max-w-maxContent flex flex-col item-center justify-between gap-7 mb-10  '>
  <div className='flex flex-row gap-5 mt-[95px] mb-10'>
  <div className='text-4xl font-semibold w-[45%]'>Get the skills you need for a <HighlightText text={"Job that is in Demand"}/></div>
<div className='flex flex-col w-[45%] gap-5 items-start '>
  <div className='text-[16px] text-richblack-400'>
  Tech Horizon is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
  </div>
  <CTAButton active={true} linkto={"/signup"} > Learn More</CTAButton>
</div>
  </div>
</div>
<Timelinesection/>
<Learninglanguagesection/>
    </div>

    {/*section 3*/}
    <div className='flex flex-col w-11/12 mx-auto max-w-maxContent items-center justify-between gap-8 bg-richblack-900 text-white'>
    <Instructorsection/>
    <h2 className='text-center text-4xl font-semibold mt-10'>Review from other Learners</h2>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
