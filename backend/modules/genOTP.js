

const genOTP = () => {
    const OTP = Math.round(100000 + Math.random() * 900000).toString();
    return OTP;
}

module.exports = genOTP;