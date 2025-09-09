const contestModel = require("../models/contest/contestModel");
const postModel = require('../models/post/postModel');
const userModel = require('../models/users/userModel');
const cloudinary = require('../config/cloudinaryConfig');
const fs = require('fs');

exports.createContest = async(req, res) => {
    try{
        const {title, description, startDate, endDate} = req.body;      // Input Gathering
        // Input Validation
        if(!title || !startDate || !endDate){
            return res.status(400).json({message: "All fields Required!"});
        }
        // Date Validation. Checking the startDate should be lesser than endDate
        if(new Date(startDate) > new Date(endDate)){
            return res.status(409).json({message: "Starting Date is greater than Ending Date"});
        }
        const contest = await contestModel.create({title, description, startDate: new Date(startDate), endDate: new Date(endDate), createdBy: req.user});
        res.json({message: "Contest Created Successfully", redirectTo: -1});
    }
    catch(err){
        console.error("Server Error.\nError: ", err.message);
        res.status(500).json({err: true, message: "Server Error"}); // Server Error Status
    }
}

exports.getContests = async(req, res) => {
    try{
        const contests = await contestModel.find().populate('createdBy', '_id name');   // Getting all the contests and populating metadata.
        res.status(200).json({contests});
    }
    catch(err){
        console.error("Server Error.\nError: ", err.message);
        res.status(500).json({err: true, message: "Server Error"}); // Server Error Status
    }
}

exports.getContestById = async(req, res) => {
    try{
        const {contestId} = req.params;                                 // id Gathering
        // id Validation
        if(!contestId){
            return res.status(400).json({message: "ID not found!!"});
        }
        const c = await contestModel.findById(contestId);               // Contest Searching based on id
        if(!c){
            return res.status(400).json({message: "Contest not found!"});
        }
        await c.populate('createdBy', '_id name isVerified role');      // Population of the creator
        await c.populate({
                path: 'posts', 
                select: '_id imageURL imageMeta caption createdBy vote',
                populate: {                                         // Nested Population
                    path: 'createdBy',
                    select: '_id name isVerified role'
                }
             }); // Populating the metadata of Post.

        const contest = c;
        res.status(200).json({contest});
    }
    catch(err){
        console.error("Server Error.\nError: ", err.message);
        res.status(500).json({err: true, message: "Server Error"}); // Server Error Status
    }
}

exports.createPost = async(req, res) => {
    try{
        const {contestId} = req.params;                     // ID Gathering
        const {caption} = req.body;                         // Input Gathering
        // Input Validation
        if(!caption || !req.files){
            return res.status(409).json({message: "All fields are required!"});
        }
        // Contest Availability Checking
        const contest = await contestModel.findById(contestId);
        if(!contest){
            return res.status(400).json({message: "No Contest Available!"});
        }

        // Repeated Participants Avoidance
        const user = contest.participants.includes(req.user) ;
        if(user){
            return res.status(400).json({message: "You Already Uploaded the Image"})
        }
        
        // Storing the uploaded image in Cloudinary by requiring the image from the upload.fields([]);
        const result = await cloudinary.uploader.upload(req.files['image'][0].path,{
            folder: `contests/${contestId}`,        // Cloudinary Folder Name
            resource_type: 'image',                 // Resource Type: Image
            use_filename: true,                     // use_filename & unique_filename are used for avoiding same name conflict
            unique_filename: true
        });

        fs.unlinkSync(req.files['image'][0].path);  // Deleting the image locally

        const post = await postModel.create({ contest: contestId, createdBy: req.user, imageURL: result.secure_url, imageMeta:{ aspectRatio: result.width / result.height, width: result.width, height: result.height, sizeBytes: result.bytes }, caption: caption });

        contest.participants.push(req.user);        // Storing the user id in participants
        contest.posts.push(post._id);               // Storing the post id in posts

        await contest.save();                       // save the contest

        res.status(200).json({message: "Post Created Successfully.", redirectTo: -1});
        
    }
    catch(err){
        console.error("Server Error.\nError: ", err.message);
        res.status(500).json({err: true, message: "Server Error"}); // Server Error Status
    }
}