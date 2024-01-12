import React from 'react'

const ProvideBtn = ({ name, img }) => {
  return (
    <div className="rounded-lg shadow-lg text-blueColor duration-300  hover:text-redColor hover:shadow-2xl">
      <img
        src={img}
        alt={name}
        className="w-56 rounded-tl-lg rounded-tr-lg h-28 object-cover"
      />
      <div className="font-medium p-2 text-center">{name}</div>
    </div>
  )
}

export default ProvideBtn
