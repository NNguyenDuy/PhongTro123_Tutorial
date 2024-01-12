import express from "express";
import * as controllers from '../controllers/category'
const router = express.Router()

// Gửi data sử dụng post
router.get('/all', controllers.getCategories)

export default router