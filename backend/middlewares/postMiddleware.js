const contestModel = require('../models/contest/contestModel');
const postModel = require('../models/post/postModel');

exports.timeline = async(req, res, next) => {
    try{
        const {contestId} = req.params;
        const contest = await contestModel.findById(contestId);
        if(contest){
            return res.status(404).json({message: "Contest Not Found"});
        }
        const sDate = new Date(contest.startDate);
        const eDate = new Date(contest.endDate);

        if(sDate.getTime() > Date.now()){
            return res.status(403).json({message: "Contest Not Start Yet."});
        }
        if(eDate.getTime() < Date.now()){
            return res.status(403).json({message: "Contest Ended"});
        }

        next();
    }
    catch(err){
        console.error("Server Error.\nError: ", err.message);
        res.status(500).json({err: true, message: "Server Error"}); // Server Error Status
    }
}

exports.voteValidate = async(req, res, next) => {
    try{
        const {postId} = req.params;
        const post = await postModel.findById(postId).populate('contest', 'startDate endDate');
        if(post){
            return res.status(404).json({message: "Post Not Found"});
        }
        const contest = post.contest;
        if(!contest){
            return res.status(400).json({message: "Contest Not Found"});
        }
        const sDate = new Date(contest.startDate);
        const eDate = new Date(contest.endDate);

        if(sDate.getTime() > Date.now()){
            return res.status(403).json({message: "Contest Not Start Yet."});
        }
        if(eDate.getTime() < Date.now()){
            return res.status(403).json({message: "Contest Ended"});
        }

        next();
    }
    catch(err){
        console.error("Server Error.\nError: ", err.message);
        res.status(500).json({err: true, message: "Server Error"}); // Server Error Status
    }
}