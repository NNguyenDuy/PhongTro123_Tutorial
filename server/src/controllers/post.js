import * as postService from '../services/post'

export const getPost = async (req, res) => {
  try {
    const response = await postService.getPostsService()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      error: -1,
      msg: 'Failed at post controller' + error,
    })
  }
}

export const getPostLimit = async (req, res) => {
  const { page, ...query } = req.query
  try {
    const response = await postService.getPostsLimitService(page, query)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      error: -1,
      msg: 'Failed at post controller' + error,
    })
  }
}
