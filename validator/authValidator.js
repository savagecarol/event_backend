const firebase = require('firebase-admin');
const Joi = require('joi');

class AuthValidator {

  validateSendOtp(req, res, next) {
    const { error } = this.Joi.object({
        phoneNumber: Joi.string().required(),
        otp: Joi.string().required().min(6).max(6)
      }).validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  }

}

module.exports = AuthValidator;
