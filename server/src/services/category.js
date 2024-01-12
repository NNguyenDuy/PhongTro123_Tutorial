import db from '../models'

export const getCategoriesServices = () => new Promise(async (resolve, reject) => {
  try {
    // Lấy tất cả trong table Category
    const response = await db.Category.findAll({
      raw: true,
      // Lấy thì chỉ cần như sau
      attributes: ['code', 'value']
      // Không lấy thì lầm như sau
      // {
      //   exclude: ['createdAt', 'updatedAt', 'header', 'subheader']
      // }
    })

    resolve({
      err: response ? 0 : 1,
      msg: response ? 'Ok' : 'Failed to get categories',
      response
    })
  } catch (error) {
    reject(error)
  }
})