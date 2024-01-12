import db from '../models'
import bcryt from 'bcryptjs'
import { v4 } from 'uuid'
import generateCode from '../ultis/generateCode'
import { dataPrice, dataArea } from '../ultis/data'
import { getNumberFromString } from '../ultis/common'

// import dataChoThue from '../../data/chothuecanho.json'
// const codeCategory = 'CTCH'
// const valueCategory = 'Cho thuê căn hộ'

// --> Nhớ comment hàm insert price and area
// import dataChoThue from '../../data/chothuematbang.json'
// const codeCategory = 'CTMB'
// const valueCategory = 'Cho thuê mặt bằng'

// import dataChoThue from '../../data/chothuephongtro.json'
// const codeCategory = 'CTPT'
// const valueCategory = 'Cho thuê phòng trọ'

import dataChoThue from '../../data/nhachothue.json'
const codeCategory = 'NCT'
const valueCategory = 'Nhà cho thuê'

require('dotenv').config()

const dataBody = dataChoThue.body
const hashPassword = (password) =>
  bcryt.hashSync(password, bcryt.genSaltSync(12))

export const insertService = () =>
  new Promise(async (resolve, reject) => {
    try {
      await db.Category.create({
        code: codeCategory,
        value: valueCategory,
        header: dataChoThue?.header?.title,
        subheader: dataChoThue?.header?.description,
      })

      // ->

      // await Promise.all(
      //   dataPrice.map(async (item, index) => {
      //     await db.Price.create({
      //       code: item.code,
      //       value: item.value,
      //       order: index + 1,
      //     })
      //   })
      // )

      // await Promise.all(
      //   dataArea.map(async (item, index) => {
      //     await db.Area.create({
      //       code: item.code,
      //       value: item.value,
      //       order: index + 1,
      //     })
      //   })
      // )

      //->

      await Promise.all(
        dataBody.map(async (item) => {
          let postId = v4()
          let attributesId = v4()
          let userId = v4()
          let overviewId = v4()
          let imagesId = v4()
          let labelCode = generateCode(item?.header?.class?.type)
          let currentArea = getNumberFromString(
            item?.header?.attributes?.acreage
          )
          let currentPrice = getNumberFromString(
            item?.header?.attributes?.price
          )
          // Tên phải giống table bên models
          await db.Post.create({
            id: postId,
            title: item?.header?.title,
            star: item?.header?.star,
            labelCode,
            address: item?.header?.address,
            attributesId,
            categoryCode: codeCategory,
            description: JSON.stringify(item?.mainContent.content),
            userId,
            overviewId,
            imagesId,
            areaCode: dataArea.find(
              (i) => i.max >= currentArea && currentArea >= i.min
            )?.code,
            priceCode: dataPrice.find(
              (i) => i.max >= currentPrice && currentPrice >= i.min
            )?.code,
          })
          await db.Attribute.create({
            id: attributesId,
            price: item?.header?.attributes?.price,
            acreage: item?.header?.attributes?.acreage,
            published: item?.header?.attributes?.published,
            hashtag: item?.header?.attributes?.hashtag,
          })

          await db.Image.create({
            id: imagesId,
            image: JSON.stringify(item?.images),
          })

          await db.Label.findOrCreate({
            where: { code: labelCode },
            defaults: {
              code: labelCode,
              value: item?.header?.class?.type,
            },
          })

          await db.Overview.create({
            id: overviewId,
            code: item?.overview?.content.find((i) => i.name === 'Mã tin:')
              ?.content,
            area: item?.overview?.content.find((i) => i.name === 'Khu vực')
              ?.content,
            type: item?.overview?.content.find(
              (i) => i.name === 'Loại tin rao:'
            )?.content,
            target: item?.overview?.content.find(
              (i) => i.name === 'Đối tượng thuê:'
            )?.content,
            bonus: item?.overview?.content.find((i) => i.name === 'Gói tin:')
              ?.content,
            created: item?.overview?.content.find(
              (i) => i.name === 'Ngày đăng:'
            )?.content,
            expire: item?.overview?.content.find(
              (i) => i.name === 'Ngày hết hạn:'
            )?.content,
          })

          await db.User.create({
            id: userId,
            name: item?.contact?.content.find((i) => i.name === 'Liên hệ:')
              ?.content,
            password: hashPassword('123456'),
            phone: item?.contact?.content.find((i) => i.name === 'Điện thoại:')
              ?.content,
            zalo: item?.contact?.content.find((i) => i.name === 'Zalo')
              ?.content,
          })
        })
      )

      resolve('Done create database')
    } catch (error) {
      reject(error)
    }
  })
