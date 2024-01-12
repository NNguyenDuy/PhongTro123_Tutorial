import axiosConfig from '../axiosConfig'

// Nhận data từ form input user sau đó đưa lên url sau với data từ payload
export const apiGetCategories = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: '/api/v1/category/all',
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
