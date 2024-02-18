const express = require('express');
const AuthController = require('../controller/authController');
const router = express.Router();


/**
 * @swagger
 * /api/auth/v1/send-otp:
 *   post:
 *     tags: [Auth] 
 *     summary: Send OTP
 *     description: Send OTP to the phone number
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phoneNumber:
 *                 type: string
 *                 description: The phone number to which OTP will be sent
 *             example:
 *               phoneNumber: "+1234567890"
 *     responses:
 *       200:
 *         description: Successful response if OTP is sent
 */
router.post('/v1/send-otp', AuthController.sendOTP);

/**
 * @swagger
 * /api/auth/v1/validate-otp:
 *   post:
 *     tags: [Auth] 
 *     summary: validate otp
 *     description: validate otp.
 *     responses:
 *       200:
 *         description: validate response 
 */
router.post('/v1/validate-otp', AuthController.sendOTP);

module.exports = router;