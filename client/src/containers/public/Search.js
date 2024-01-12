import React from 'react'
import { SearchItem } from '../../components/'
import images from '../../assets/index'

const Search = () => {
  return (
    <div className='py-2 my-3 w-5/6 px-3 bg-yellowColor rounded-lg flex-col lg:flex-row flex justify-around items-center gap-2 text-sm'>
      <SearchItem IconBefore={images.iconBuilding} fonWeight
        IconAfter={images.iconDelete} text={'Phòng trọ, nhà trọ'} />

      <SearchItem IconBefore={images.iconLocation}
        IconAfter={images.iconNext} text={'Toàn quốc'} />

      <SearchItem IconBefore={images.iconPrice}
        IconAfter={images.iconNext} text={'Chọn giá'} />

      <SearchItem IconBefore={images.iconArea}
        IconAfter={images.iconNext} text={'Chọn diện tích'} />

      <button className='w-full bg-blueColor py-2 px-2 rounded-md
       text-white flex justify-center items-center font-bold'>
        <images.iconSearch />
        <span className='ml-2'>
          Tìm Kiếm
        </span>
      </button>
    </div>
  )
}

export default Search