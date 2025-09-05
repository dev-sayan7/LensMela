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
        type: Date
    },
    endDate:{
        type: Date
    },
    participants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    }],
    createdOn:{
        type: Date
    },createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel'
    }
});

module.exports = mongoose.model("contestModel", contestSchema);