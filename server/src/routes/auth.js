import express from "express";
import * as authController from '../controllers/auth'

const router = express.Router()

// Gửi data sử dụng post
router.post('/register', authController.register)
router.post('/login', authController.login)

export default router