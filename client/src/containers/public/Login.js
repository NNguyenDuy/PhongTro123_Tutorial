import React, { memo, useState, useEffect } from 'react'
import { Button, InputForm } from '../../components'
import { useLocation, useNavigate } from 'react-router-dom'
import * as actions from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'

const Login = () => {
  //  Nhận state từ trang Header
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // Nhận flag để check login or register
  const [isRegister, setIsRegister] = useState(location.state?.flag)
  const [invalidFields, setInvalidFields] = useState([])
  const { isLoggedIn, msg, update } = useSelector(state => state.auth)

  useEffect(() => {
    msg && Swal.fire('Oops !', msg, 'error')
  }, [msg, update])


  useEffect(() => {
    setIsRegister(location.state?.flag)
  }, [location.state?.flag])

  useEffect(() => {
    isLoggedIn && navigate('/')
  }, [isLoggedIn, navigate])


  const [payload, setPayload] = useState({
    phone: '',
    password: '',
    name: ''
  })

  const handleSubmit = async () => {
    let finalPayload = isRegister ? payload : {
      phone: payload.phone,
      password: payload.password
    }

    let invalids = validate(finalPayload)
    if (invalids === 0) {
      isRegister ?
        dispatch(actions.register(finalPayload))
        :
        dispatch(actions.login(finalPayload))
    }
  }

  const validate = (payload) => {
    let invalids = 0
    let fields = Object.entries(payload)
    fields.forEach(item => {
      if (item[1] === '') {
        setInvalidFields(prev => [...prev, {
          name: item[0],
          message: 'Bạn không được bỏ trống trường này.'
        }])
        invalids++
      }
    })

    fields.forEach(item => {
      switch (item[0]) {
        case 'password':
          if (item[1].length < 6) {
            setInvalidFields(prev => [...prev, {
              name: item[0],
              message: 'Mật khẩu phải tối thiểu 6 ký tự.'
            }])
            invalids++
          }
          break;
        case 'phone':
          if (!+ item[1]) {
            setInvalidFields(prev => [...prev, {
              name: item[0],
              message: 'Số điện thoại không hợp lệ.'
            }])
            invalids++
          }
          break;
        default:
          break;
      }
    })
    return invalids
  }

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='bg-white w-[600px] mt-3 p-[30px] pb-[100px] rounded-md shadow-md '>
        <h3 className='font-semibold text-2xl mb-3'>{isRegister ? 'Tạo tài khoản mới' : 'Đăng Nhập'}</h3>
        <div className='w-full flex flex-col gap-5'>
          {
            isRegister &&
            <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields}
              label={"Họ tên"} value={payload.name} setValue={setPayload} keyPayload={'name'} />
          }
          <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields}
            label={"Số điện thoại"} value={payload.phone} setValue={setPayload} keyPayload={'phone'} />

          <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields}
            label={"Mật khẩu"} type={'password'} value={payload.password} setValue={setPayload} keyPayload={'password'} />
          <Button
            text={isRegister ? "Đăng Ký" : "Đăng Nhập"}
            textColor={"text-white"} bgColor={"bg-blueColor"}
            onClick={handleSubmit} />
        </div>
        <div className='flex justify-between mt-6 text-blueColor '>
          {
            isRegister ?
              <small className='text-black'>Bạn đã có tài khoản?
                <span
                  className="cursor-pointer text-blueColor  hover:text-red-500"
                  onClick={() => {
                    setIsRegister(false)
                    setPayload({
                      phone: '',
                      password: '',
                      name: ''
                    })
                  }
                  }
                > Đăng nhập ngay</span>
              </small>
              :
              <>
                <small className="cursor-pointer hover:text-red-500">Bạn quên mật khẩu?</small>
                <small
                  className="cursor-pointer hover:text-red-500 "
                  onClick={() => {
                    setIsRegister(true)
                    setPayload({
                      phone: '',
                      password: '',
                      name: ''
                    })
                  }}
                >Tạo tài khoản mới</small>
              </>
          }
        </div>
      </div >
    </div>
  )
}

export default memo(Login)