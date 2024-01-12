import axiosConfig from '../axiosConfig'

// Nhận data từ form input user sau đó đưa lên url sau với data từ payload
export const apiGetPrices = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: '/api/v1/price/all',
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiGetAreas = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: '/api/v1/area/all',
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
