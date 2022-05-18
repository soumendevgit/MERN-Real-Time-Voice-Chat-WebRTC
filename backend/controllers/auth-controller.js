const UserDto = require("../dtos/user-dto");
const HashService = require("../services/hash-service");
const otpService = require("../services/otp-service");
const tokenService = require("../services/token-service");
const userService = require("../services/user-service");

class AuthController {
  async sendOtp(req, res) {
      const {phone} = req.body;

      if(!phone){
          res.status(400).json({
              message: 'Phone field is required'
          });
      }
      const otp = await otpService.generateOtp();

    //   Hash Otp
    const ttl = 1000*60*2;
    const expires = Date.now() + ttl;
    const data = `${phone}.${otp}.${expires}`;
    const hash = HashService.hashOtp(data);


    // Send SMS
    try {
        // await otpService.sendBySms(phone, otp)
        console.log(otp);
        res.status(200).json({
            hash : `${hash}.${expires}`,
            phone,            
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'message sending failed'});
    }

    // res.send("Hello From OTP" + otp + " --- " +  hash);
  }

  async verifyOtp(req, res){
    //   Logic
    const {phone, otp, hash} = req.body;
    if(!otp || !phone || !hash){
        res.status(400).json({message:'All fields are required!'});
    }

    const [hashedOtp, expires] = hash.split('.');
    if (Date.now() > +expires) {
        res.status(400).json({message:'OTP expired!'});
    }

    const data = `${phone}.${otp}.${expires}`;

    const isValid = otpService.verifyOtp(hashedOtp, data);

    if (!isValid){
        res.status(400).json({message:'Invalid OTP'});
    }

    let user;
    // let accessToken;
    // let refreshToken;

    try {
        user = await userService.findUser({phone})

        if (!user) {
            user = await userService.createUser({phone})
        } else {
            
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }

    // Token
    const {accessToken, refreshToken} = tokenService.generateTokens({_id:user._id, activated: false});

    res.cookie('refreshtoken',refreshToken, {
        maxAge:1000*60*60*24*30,
        httpOnly: true
    })

    const userDto = new UserDto(user)

    res.status(200).json({accessToken, user: userDto})

  }
}

module.exports = new AuthController();
