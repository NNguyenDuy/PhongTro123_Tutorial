import db from '../models'
import bcryt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { v4 } from 'uuid'
require('dotenv').config()

const hashPassword = password => bcryt.hashSync(password, bcryt.genSaltSync(12))

export const registerService = ({ phone, password, name }) => new Promise(async (resolve, reject) => {
  try {
    // Trả về 2 đối số là data và true or false dựa vào data đã có hay chưa
    const response = await db.User.findOrCreate({
      where: { phone },
      defaults: {
        phone,
        name,
        password: hashPassword(password),
        id: v4()
      }
    })
    // kiểm response là true thì sẽ tạo, jwt là để mã hoá
    const token = response[1] && jwt.sign({
      id: response[0].id, phone: response[0].phone
    }, process.env.SECRET_KEY, { expiresIn: '2d' })
    resolve({
      // Nếu là token thì trả về 0 ngc lại là 2
      err: token ? 0 : 2,
      msg: token ? 'Register is succesfully !' : 'Phone number has been aldready used!',
      token: token || null
    })

  } catch (error) {
    reject(error)
  }
})

export const loginService = ({ phone, password }) => new Promise(async (resolve, reject) => {
  try {
    // Trả về 2 đối số là data và true or false dựa vào data đã có hay chưa
    const response = await db.User.findOne({
      where: { phone },
      // Để trả 1 object có data khi tìm được
      raw: true
    })

    // Nếu thằng response true thì sẽ so sánh pass word nếu true tiếp thì isCorrect sẽ là true
    const isCorrectPassword = response && bcryt.compareSync(password, response.password)
    const token = isCorrectPassword && jwt.sign({
      id: response.id, phone: response.phone
    }, process.env.SECRET_KEY, { expiresIn: '2d' })

    resolve({
      err: token ? 0 : 2,
      msg: token ? 'Login is succesfully !' :
        response ? 'Password is wrong' : 'Phone number not found!',
      token: token || null
    })

  } catch (error) {
    reject(error)
  }
})