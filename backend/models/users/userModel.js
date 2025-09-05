const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true
    },
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
    role:{
        type: String,
        enum: ['User', 'Organizer'],
        default: 'User'
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date
    }

});

module.exports = mongoose.model('userModel', userSchema);