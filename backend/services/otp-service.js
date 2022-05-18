const crypto = require('crypto')
const HashService = require('./hash-service')

const smsSid = process.env.TWILIO_SMS_SID
const smsAuthToken = process.env.TWILIO_SMS_AUTH_TOKEN

const twilio = require('twilio')(smsSid, smsAuthToken, {lazyLoading: true})

class OtpService{
    async generateOtp(){
        const otp = crypto.randomInt(1111,9999)
        return otp;
    }

    async sendBySms(phone, otp) {
        return await twilio.messages.create({
            to: phone,
            from: process.env.TWILIO_SMS_FROM_NUMBER,
            body: `Your chat room Otp is ${otp}`
        })
    }

    verifyOtp(hashedOtp, data) {
        let computedHash = HashService.hashOtp(data);

        return computedHash === hashedOtp ? true : false
    }
}

module.exports = new OtpService();