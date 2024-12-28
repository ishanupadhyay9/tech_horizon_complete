import React from 'react'

const HighlightText = (props) => {
    const text = props.text;
  return (
   <span className={`font-bold text-blue-300 `}>{text}</span>
  )
}

export default HighlightText
