import React, { memo } from 'react'

const Button = ({ text, textColor, bgColor, Icon, onClick }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 ${textColor} ${bgColor} rounded-md hover:underline`}>
      {text}
      {
        Icon &&
        <span className='ml-1'><Icon className='inline' /></span>
      }
    </button>
  )
}

export default memo(Button)