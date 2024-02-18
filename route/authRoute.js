const express = require('express');
const AuthController = require('../controller/authController');
const router = express.Router();

/**
 * @swagger
 * /api/auth/v1/send-otp:
 *   get:
 *     tags: [Auth] 
 *     summary: Send otp
 *     description: send otp to the phone number
 *     responses:
 *       200:
 *         description: successful response if send otp
 */
router.post('/v1/send-otp', AuthController.sendOTP);

/**
 * @swagger
 * /api/auth/v1/validate-otp:
 *   get:
 *     tags: [Auth] 
 *     summary: validate otp
 *     description: validate otp.
 *     responses:
 *       200:
 *         description: validate response 
 */
router.post('/v1/validate-otp', AuthController.sendOTP);

module.exports = router;