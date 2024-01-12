import React, { memo } from 'react'
import images from '../assets'
import { Link } from 'react-router-dom'
import { formatVietnameseToString } from '../ultils/common/formatVietnameseToString'

const Item = ({
  image,
  star,
  title,
  user,
  address,
  attributes,
  description,
  id,
}) => {
  const handleStart = (star) => {
    const stars = []
    for (let index = 0; index < star; index++) {
      stars.push(
        <images.iconStar
          key={index}
          color="yellow"
          size={20}
          className="star mr-1"
        />
      )
    }
    return stars
  }

  return (
    <div className="flex bg-[#fff9f3] border-t border-redColor p-4">
      <Link
        to={`chi-tiet/${formatVietnameseToString(title)}/${id}`}
        className="w-2/5 relative cursor-pointer h-64"
      >
        <img
          src={`${image[0]}`}
          alt="imgPreview"
          className="w-72 h-60 rounded-md"
        />
        <div className="absolute left-2 bottom-7 text-white text-sm">
          <span className=" bg-gray-900 bg-opacity-70 py-[2px] px-[5px] rounded-md">
            {`${image.length} ảnh`}
          </span>
        </div>
        <div className="absolute right-9 bottom-7 opacity-100 group transition">
          <span className="absolute ">
            <images.iconHeart
              size={25}
              className=" cursor-pointer"
              color="white"
            />
          </span>
          <span className="opacity-0 group-hover:opacity-100 transition">
            <images.iconHeartFill
              size={25}
              className=" cursor-pointer"
              fill="red"
            />
          </span>
        </div>
      </Link>

      <div className="w-3/5 px-3 ">
        <div className="flex flex-col gap-3">
          <div>
            {handleStart(star)}
            <span className="text-redColor font-bold hover:underline cursor-pointer uppercase">
              {title}
            </span>
          </div>

          <div className="flex justify-between gap-2 items-center">
            <span className="font-bold text-greenColor text-lg  flex-3 whitespace-nowrap text-ellipsis overflow-hidden">
              {attributes?.price}
            </span>
            <span className="flex-1">{attributes.acreage}</span>
            <span className="hover:underline cursor-pointer flex-3 whitespace-nowrap text-ellipsis overflow-hidden">
              {`${address.split(',')[address.split(',').length - 2]}, ${
                address.split(',')[address.split(',').length - 1]
              }`}
            </span>
          </div>

          <div className="text-gray-500 h-[75px] text-ellipsis  overflow-hidden">
            {description}
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://phongtro123.com/images/default-user.png"
                alt="avata"
                className="w-9 rounded-full "
              />
              <span className="w-[120px] h-7 text-ellipsis overflow-hidden">
                {user?.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="bg-blueColor text-white
                hover:bg-white hover:text-blueColor duration-300
                hover:border hover:border-blueColor 
                py-2 px-3 rounded-md"
              >{`Gọi ${user?.phone}`}</button>
              <button
                className="border border-blueColor
                hover:bg-blueColor hover:text-white duration-300
                py-2 px-3 rounded-md text-blueColor"
              >
                Nhắn zalo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Item)
