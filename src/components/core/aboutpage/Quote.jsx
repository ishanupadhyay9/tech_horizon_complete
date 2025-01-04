import React from 'react'
import HighlightText from '../homepage/HighlightText'

const Quote = () => {
  return (
    <div className='text-white'>
      We are passionate about revolutionizing the way we learn. Our innovative platform
      <HighlightText text="combines technology"/>  ,
      <span className=' text-brown-100'>expertise</span> , and community to create an
      <span className='text-brown-100'> unparalleled educational experience.</span> 
    </div>
  )
}

export default Quote
