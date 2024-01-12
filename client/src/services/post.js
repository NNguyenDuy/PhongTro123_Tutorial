import axiosConfig from '../axiosConfig'

// Nhận data từ form input user sau đó đưa lên url sau với data từ payload
export const apiGetPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: '/api/v1/post/all',
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiGetPostsLimit = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: 'get',
        url: `/api/v1/post/limit`,
        params: payload,
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
