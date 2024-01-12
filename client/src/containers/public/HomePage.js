import React from 'react'
import { text } from '../../ultils/contants'
import { ItemSidebar, Provide } from '../../components'
import { List, Pagination } from './index'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const { categories, prices, areas } = useSelector((state) => state.app)

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="text-gray-700 flex flex-col gap-2">
        <h1 className="text-3xl font-bold ">{text.HOME_TITLE}</h1>
        <p className="text-sm">{text.HOME_DESCRIPTION}</p>
      </div>
      <Provide />
      <div className="flex gap-5">
        <div className="w-[70%]">
          <List />
          <Pagination />
        </div>

        <div className="w-[30%] flex flex-col gap-5 justify-start items-center">
          <ItemSidebar
            isDouble={false}
            content={categories}
            title={'Danh mục cho thuê'}
          />
          <ItemSidebar
            isDouble={true}
            content={prices}
            type="priceCode"
            title={'Xem theo giá'}
          />
          <ItemSidebar
            isDouble={true}
            content={areas}
            type="areaCode"
            title={'Xem theo diện tích'}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
