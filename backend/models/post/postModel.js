const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    contest:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'contestModel',
        required: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel',
        required: true
    },
    imageURL:{
        type: String,
        required: true
    },
    imageMeta:{
        aspectRatio: Number,
        sizeBytes: Number,
        width: Number,
        height: Number
    },
    caption:{
        type: String,
    },
    vote: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "userModel"
    }],
}, {timestamps: true});

module.exports = mongoose.model("postModel", postSchema);