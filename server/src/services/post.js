import db from '../models'

export const getPostsService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        // Gộp lại thành 1 object của cái gọi
        nest: true,
        include: [
          //  attributes: ['image'] chỉ lấy image trong table image
          { model: db.Image, as: 'images', attributes: ['image'] },
          { model: db.User, as: 'user', attributes: ['name', 'phone', 'zalo'] },
          {
            model: db.Attribute,
            as: 'attributes',
            attributes: ['price', 'acreage', 'published', 'hashtag'],
          },
        ],
        attributes: ['id', 'title', 'star', 'address', 'description'],
      })

      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Getting post is failed.',
        response,
      })
    } catch (error) {
      reject(error)
    }
  })

export const getPostsLimitService = (page, query) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || page <= 1 ? 0 : +page - 1
      const response = await db.Post.findAndCountAll({
        raw: true,
        where: query,
        nest: true,
        offset: offset * +process.env.LIMIT || 0,
        limit: +process.env.LIMIT,
        include: [
          { model: db.Image, as: 'images', attributes: ['image'] },
          { model: db.User, as: 'user', attributes: ['name', 'phone', 'zalo'] },
          {
            model: db.Attribute,
            as: 'attributes',
            attributes: ['price', 'acreage', 'published', 'hashtag'],
          },
        ],
        attributes: ['id', 'title', 'star', 'address', 'description'],
      })

      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Getting post is failed.',
        response,
      })
    } catch (error) {
      reject(error)
    }
  })
