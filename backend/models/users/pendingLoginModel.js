const mongoose = require('mongoose');

const pendingLoginSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    OTP:{
        type: String,
        required: true,
    },
    OTPExpiry: {
        type: Date
    }
});

module.exports = mongoose.model('pendingLoginModel', pendingLoginSchema);