import React, { memo } from 'react'
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'

const notActive = 'bg-white'
const active = 'bg-redColor text-white'

const PageNumber = ({ text, currentPage, icon, setCurrentPage }) => {
  const navigate = useNavigate()

  const [paramsSearch] = useSearchParams()
  let entries = paramsSearch.entries()

  const append = (entries) => {
    let params = []
    paramsSearch.append('page', +text)
    for (let entry of entries) {
      params.push(entry)
    }
    let a = {}
    params?.map((i) => {
      a = { ...a, [i[0]]: i[1] }
      return null
    })
    return a
  }

  const handleChangePage = () => {
    if (text !== '...') {
      setCurrentPage(+text)

      navigate({
        pathname: '/',
        search: createSearchParams(append(entries)).toString(),
      })
    }
  }
  return (
    <div
      className={
        'flex items-center justify-center py-3 hover:bg-gray-300 rounded-md w-[46px] h-[48px] ' +
        (+text === +currentPage
          ? active
          : `${notActive} ${
              text === '...' ? 'cursor-not-allowed' : 'cursor-pointer'
            }`)
      }
      onClick={handleChangePage}
    >
      {icon || text}
    </div>
  )
}

export default memo(PageNumber)
