import React, { memo } from 'react'

const SearchItem = ({ IconBefore, IconAfter, text, fonWeight }) => {
  return (
    <div className='bg-white py-2 px-2 w-full rounded-md text-gray-600 flex justify-between items-center'>
      <div className='flex items-center justify-center gap-1'>
        {IconBefore && <IconBefore color="rgb(156, 163, 175)" />}
        <span className={`${fonWeight && 'font-medium text-black '}  overflow-hidden text-ellipsis whitespace-nowrap`}>
          {text}
        </span>
      </div>
      {IconAfter && <IconAfter color="rgb(156, 163, 175)" />}
    </div>
  )
}

export default memo(SearchItem)