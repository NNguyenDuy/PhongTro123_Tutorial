import React from 'react'
import images from '../assets/index'

const Footer = () => {
  return (
    <div className="flex w-full justify-around items-center bg-white py-10 border-t border-sky-200">
      <div>
        <img src={images.logo} alt="" className="w-60 mb-5" />
        <p className="text-sm w-96">
          Phongtro123.com tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh
          vực cho thuê phòng trọ.
        </p>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Footer
