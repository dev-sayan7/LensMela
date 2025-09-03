const mongoose = require('mongoose');

const pendingSignupSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    OTP:{
        type: String,
        required: true,
    },
    OTPExpiry: {
        type: Date
    }
    
});

module.exports = mongoose.model('pendingSignupModel', pendingSignupSchema);