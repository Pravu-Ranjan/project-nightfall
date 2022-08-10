const manager = require('../service/index')

const TWILIO_ACC_SID = process.env.TWILIO_ACC_SID
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
const TWILIO_SERVICE_ID = process.env.TWILIO_SERVICE_ID

const twilioClient = require('twilio')(TWILIO_ACC_SID, TWILIO_AUTH_TOKEN)

module.exports = {
  sendOTP: async (req, res, next) => {
    try {
      const { phone } = req.body

      const channel = 'sms'
      if (phone.length >= 13) {
        const verify = await twilioClient.verify.v2
          .services(TWILIO_SERVICE_ID)
          .verifications.create({
            to: phone,
            channel: channel,
          })
        if (!verify) {
          throw new Error(`Can't send the OTP`)
        } else {
          const result = {
            error: false,
            message: `OTP has been sent to ${phone}`,
          }
          res.status(200).send(result)
        }
      } else {
        throw new Error(`Please input a valid phone number`)
      }
    } catch (error) {
      next(error.message)
    }
  },
  verifyOtp: async (req, res, next) => {
    try {
      const { phone, otp } = req.body
      await twilioClient.verify
        .services(TWILIO_SERVICE_ID)
        .verificationChecks.create({
          to: phone.toString(),
          code: otp,
        })

      const response = await manager.userManager.findOne({
        phone: phone,
      })

      if (!response) {
        const user = await manager.userManager.create({
          phone: phone,
        })
        if (!user) {
          throw new Error(
            `Cannot create your account at this moment. Try again after some time.`
          )
        } else {
          let result = {
            error: false,
            message: 'Please wait while we are creating your account',
            user: user,
          }
          res.status(200).send(result)
        }
      } else {
        let result = {
          error: false,
          message: 'Account found!!! logging in to your account',
          user: response,
        }
        res.status(200).send(result)
      }
    } catch (error) {
      next(error.message)
    }
  },
}
