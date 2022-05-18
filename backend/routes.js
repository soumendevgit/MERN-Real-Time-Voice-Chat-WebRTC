const router = require('express').Router();
const authController = require('./controllers/auth-controller')

router.post('/api/auth/send-otp', authController.sendOtp)
router.post('/api/auth/verify-otp', authController.verifyOtp)




module.exports = router;