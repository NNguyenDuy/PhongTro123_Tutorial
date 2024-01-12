import React from 'react'
import { ProvideBtn } from './index'
import { location } from '../ultils/contants'
const Provide = () => {
  return (
    <div className="flex justify-center py-5 gap-5 cursor-pointer ">
      {location.map((i) => {
        return <ProvideBtn key={i.id} img={i.img} name={i.name} />
      })}
    </div>
  )
}

export default Provide
