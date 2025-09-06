const contestModel = require("../models/contest/contestModel")

exports.createContest = async(req, res) => {
    try{
        const {title, description, startDate, endDate} = req.body;      // Input Gathering
        // Input Validation
        if(!title || !startDate || !endDate){
            return res.status(400).json({message: "All fields Required!"});
        }
        const contest = await contestModel.create({title, description, startDate: new Date(startDate), endDate: new Date(endDate), createdBy: req.user});
        res.json({message: "Contest Created Successfully", redirectTo: -1});
    }
    catch(err){
        console.error("Server Error.\nError: ", err.message);
        res.status(500).json({err: true, message: "Server Error"}); // Server Error Status
    }
}