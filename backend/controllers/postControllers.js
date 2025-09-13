const postModel = require('../models/post/postModel');
const userModel = require('../models/users/userModel');


exports.fetchPostById = async(req, res) => {
    try{
        const {postId} = req.params;

        const post = await postModel.findById(postId).populate('createdBy', '_id name');
        if(!post){
            return res.status(400).json({message: "Post Not Available"});
        }

        res.status(201).json({post: post});
    }
    catch(err){
        console.error(`Server Error.\nError: ${err.message}`); // Server Error
        res.status(500).json({message: "Server Error."});
    }
}

exports.vote = async(req, res) => {
    try{
        const userId = req.user;            // UserId Required from the Protect Middleware
        const {postId} = req.params;        // PostId Required from the Params

        const user = await userModel.findById(userId);  // User Finding
        // User Validation
        if(!user){
            return res.status(400).json({message: "User not available"});
        }
        const post = await postModel.findById(postId);  // Post Finding
        // Post Validation
        if(!post){
            return res.status(400).json({message: "Post not available"});
        }

        // Checking if user already voted or not.
        if(post.vote.includes(userId)){
            return res.status(400).json({message: "User Already Voted"})
        }

        post.vote.push(userId);     // Pushing the USerId

        await post.save();          // Save the Post

        res.status(200).json({message: "Voted Successfully."})
    }
    catch(err){
        console.error(`Server Error.\nError: ${err.message}`); // Server Error
        res.status(500).json({message: "Server Error."});
    }
}