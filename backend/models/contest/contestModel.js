const mongoose = require('mongoose');

const contestSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    participants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    }],
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel',
        required: true
    },
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'postModel'
    }]
},{timestamps: true});

module.exports = mongoose.model("contestModel", contestSchema);