const contestModel = require("../models/contest/contestModel")

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
        const contest = await c.populate('createdBy', '_id name isVerified role');  // Populating the metadata.
        res.status(200).json({contest});
    }
    catch(err){
        console.error("Server Error.\nError: ", err.message);
        res.status(500).json({err: true, message: "Server Error"}); // Server Error Status
    }
}