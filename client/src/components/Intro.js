import React, { memo } from 'react'
import images from '../assets'
import { text } from '../ultils/dataIntro'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatVietnameseToString } from '../ultils/common/formatVietnameseToString'
const Intro = () => {
  const star = [1, 2, 3, 4, 5]
  const { categories } = useSelector((state) => state.app)
  return (
    <div className="p-10 flex gap-4 flex-col items-center bg-[#ffffff] border-2 text-center shadow-md rounded-md w-5/6 mb-7 mt-14 ">
      <h3 className="font-bold text-lg">{text.title}</h3>
      <p>
        {text.description}
        <span>
          {categories?.length > 0 &&
            categories.map((i) => {
              return (
                <Link
                  className="text-blueColor font-bold hover:text-orange-500"
                  key={i.code}
                  to={`/${formatVietnameseToString(i.value)}`}
                >
                  {i.value.toLowerCase() + ', '}
                </Link>
              )
            })}
        </span>
        {text.description2}
      </p>
      <div className="flex gap-32 items-center">
        {text.statistic.map((i, index) => {
          return (
            <div key={index}>
              <h4 className="font-bold text-xl">{i.value}</h4>
              <p>{i.name}</p>
            </div>
          )
        })}
      </div>
      <h3 className="font-bold text-lg">{text.price}</h3>
      <div>
        {star.map((i) => {
          return (
            <images.iconStar
              key={i}
              color="yellow"
              size={25}
              className="star mr-1"
            />
          )
        })}
      </div>
      <p className="italic">{text.comment}</p>
      <p>{text.author}</p>
      <h3 className="font-bold text-2xl mt-4">{text.question}</h3>
      <p>{text.answer}</p>
      <button className="bg-redColor text-white font-bold px-8 py-3 rounded-md hover:underline">
        Đăng kí ngay
      </button>
    </div>
  )
}

export default memo(Intro)
