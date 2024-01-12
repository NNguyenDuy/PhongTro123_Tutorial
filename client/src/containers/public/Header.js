import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import images from '../../assets/index'
import { Button } from '../../components'
import { useCallback, useRef, useEffect } from 'react'
import { path } from '../../ultils/contants'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions'

const Header = () => {
  const navigate = useNavigate()
  const listRef = useRef()
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const { isLoggedIn } = useSelector((state) => state.auth)
  // Truyền thêm 1 đối số trong navigate để xem trạng thái login
  const login = useCallback(
    (flag) => {
      navigate(path.LOGIN, { state: { flag } })
    },
    [navigate]
  )

  useEffect(() => {
    listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [searchParams])

  return (
    <div
      ref={listRef}
      className="w-5/6 h-[70px] flex items-center justify-between"
    >
      <Link to={path.HOME}>
        <img className="w-[240px] " src={images.logo} alt="logo" />
      </Link>
      <div className="flex gap-2 items-center">
        {!isLoggedIn && (
          <div div className="flex gap-2 items-center">
            <small> Phongtro123.com xin chào</small>
            <Button
              onClick={() => login(false)}
              text={'Đăng Nhập'}
              textColor={'text-white'}
              bgColor={'bg-blueColor'}
            />
            <Button
              onClick={() => login(true)}
              text={'Đăng Ký'}
              textColor={'text-white'}
              bgColor={'bg-blueColor'}
            />
          </div>
        )}

        {isLoggedIn && (
          <div div className="flex gap-2 items-center">
            <small> Teen</small>
            <Button
              onClick={() => dispatch(actions.logout())}
              text={'Đăng Xuất'}
              textColor={'text-white'}
              bgColor={'bg-blueColor'}
            />
          </div>
        )}

        <Button
          text={'Đăng Tin Mới'}
          textColor={'text-white'}
          bgColor={'bg-redColor'}
          Icon={images.plus}
        />
      </div>
    </div>
  )
}

export default Header
