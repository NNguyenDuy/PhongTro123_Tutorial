import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Item } from '../../components'
import { getPostsLimit } from '../../store/actions/post'
import { useSearchParams } from 'react-router-dom'

const List = () => {
  const dispatch = useDispatch()
  const [searchParam] = useSearchParams()
  const { posts } = useSelector((state) => state.post)

  useEffect(() => {
    let params = []
    for (let entry of searchParam.entries()) {
      params.push(entry)
    }
    let searchParamObject = {}
    params?.map(
      (i) => (searchParamObject = { ...searchParamObject, [i[0]]: i[1] })
    )
    dispatch(getPostsLimit(searchParamObject))
  }, [dispatch, searchParam])

  return (
    <div className="p-3 bg-[#ffffff] shadow-md rounded-md">
      <div className="flex justify-between ">
        <h4 className="text-xl font-bold ">Danh sách tin đăng</h4>
        <span>Cập nhật: 12:05 17/08/2023</span>
      </div>
      <div className="flex items-center gap-2 my-3">
        <span>Sắp xếp: </span>
        <Button text="Mặc định" bgColor="bg-gray-200" />
        <Button text="Mới nhất" bgColor="bg-gray-200" />
      </div>
      <div className="items justify-around">
        {posts?.length > 0 &&
          posts.map((item) => {
            return (
              <Item
                key={item.id}
                address={item?.address}
                attributes={item?.attributes}
                description={JSON.parse(item?.description)}
                image={JSON.parse(item?.images?.image)}
                star={+item?.star}
                title={item?.title}
                user={item?.user}
                id={item?.id}
              />
            )
          })}
      </div>
    </div>
  )
}

export default List
