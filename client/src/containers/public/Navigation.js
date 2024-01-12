import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { formatVietnameseToString } from '../../ultils/common/formatVietnameseToString'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'

const Navigation = () => {
  const active = 'bg-redColor px-4 h-full flex items-center'
  const notActive = 'hover:bg-redColor  px-4 h-full flex  items-center'
  const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.app)

  useEffect(() => {
    dispatch(actions.getCategories())
    dispatch(actions.getPrices())
    dispatch(actions.getAreas())
  }, [dispatch])

  return (
    <div className="w-screen  bg-blueColor flex justify-center ">
      <div className="w-5/6 h-10 flex text-white font-medium">
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            Trang chủ
          </NavLink>
        </div>
        {categories?.length > 0 &&
          categories.map((item) => {
            return (
              <div key={item.code}>
                <NavLink
                  to={`${formatVietnameseToString(item.value)}`}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.value}
                </NavLink>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Navigation
