import React, { memo } from 'react'
import images from '../assets/index'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { formatVietnameseToString } from '../ultils/common/formatVietnameseToString'

const ItemSidebar = ({ content, title, isDouble, type }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleFilterPosts = (code) => {
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
        [type]: code,
      }).toString(),
    })
  }

  return (
    <>
      {isDouble === false ? (
        <div className="p-4 w-full bg-white shadow-md rounded-md">
          <h3 className="font-semibold text-lg mb-4">{title}</h3>
          <div className="flex gap-3 flex-col">
            {content?.length > 0 &&
              content.map((i) => (
                <Link
                  key={i.code}
                  className="flex gap-1 items-center cursor-pointer hover:text-orange-600 border-b border-dashed border-gray-200 pb-1"
                  to={formatVietnameseToString(i.value)}
                >
                  <images.iconNext size={22} color="gray" />
                  <p>{i.value}</p>
                </Link>
              ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 w-full gap-4 p-4 bg-white shadow-md rounded-md">
          <h3 className="font-semibold text-lg mb-4 col-span-2">{title}</h3>
          {content?.length > 0 &&
            content.map((i) => (
              <div
                onClick={() => handleFilterPosts(i.code)}
                key={i.code}
                className="flex gap-1 items-center cursor-pointer hover:text-orange-600 border-b border-dashed border-gray-200 pb-1 col-span-1"
              >
                <images.iconNext size={22} color="gray" />
                {type === 'priceCode' ? (
                  <p>{i.value}</p>
                ) : (
                  <p>
                    {i.value}
                    <sup>2</sup>
                  </p>
                )}
              </div>
            ))}
        </div>
      )}
    </>
  )
}

export default memo(ItemSidebar)
