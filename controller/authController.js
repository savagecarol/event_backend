
class AuthController {

      static async sendOTP(req, res) {
        try {
          const { phoneNumber } = req.body;
          const verificationId = await firebaseApp.auth().verifyPhoneNumber(phoneNumber);
          res.status(200).json({ verificationId });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    
      // Validate the OTP sent to the user's phone number
      static async validateOTP(req, res) {
        try {
          const { verificationId, otp } = req.body;
          const userCredential = await firebaseApp.auth().signInWithPhoneNumber(verificationId, otp);
          res.status(200).json(userCredential.user);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
  }
  
  module.exports = AuthController;