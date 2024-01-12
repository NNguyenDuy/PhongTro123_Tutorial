import React, { useState, useEffect } from 'react'
import images from '../../assets'
import { useSelector } from 'react-redux'
import { PageNumber } from '../../components'
import { useSearchParams } from 'react-router-dom'

const Pagination = () => {
  const { count } = useSelector((state) => state.post)
  const [params] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)
  const [arrPage, setArrPage] = useState([])

  useEffect(() => {
    let page = params.get('page')
    if (page && Number(page) !== currentPage) {
      setCurrentPage(page)
    } else if (!page) {
      setCurrentPage(1)
    }
  }, [params, currentPage])

  useEffect(() => {
    const stepPage = 2
    const maxPage = Math.floor(count / process.env.REACT_APP_LIMIT_POSTS)
    let end =
      currentPage + stepPage > maxPage ? maxPage : currentPage + stepPage
    let start = currentPage - stepPage <= 0 ? 1 : currentPage - stepPage
    let temp = []
    for (let i = start; i <= end; i++) temp.push(i)
    setArrPage(temp)
  }, [currentPage, count])

  return (
    <div className="flex items-center justify-center py-5 gap-2">
      {currentPage > 3 && (
        <PageNumber setCurrentPage={setCurrentPage} text={1} />
      )}
      {currentPage > 4 && <PageNumber text={'...'} />}
      {arrPage.map((item, index) => (
        <PageNumber
          key={item}
          text={item}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ))}
      {currentPage + 2 <
        Math.floor(count / process.env.REACT_APP_LIMIT_POSTS) && (
        <>
          <PageNumber text={'...'} />
          <PageNumber
            setCurrentPage={setCurrentPage}
            icon={<images.iconGrNext />}
            text={Math.floor(count / process.env.REACT_APP_LIMIT_POSTS)}
          />
        </>
      )}
    </div>
  )
}

export default Pagination
