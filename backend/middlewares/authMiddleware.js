const jwt = require('jsonwebtoken');
const userModel = require('../models/users/userModel');


// localStorage based Token Auth Check...
// exports.protect = async(req, res, next) => {
//     try{
//         const header = req.headers.authorization;
//         if(!header || !header.startsWith('Bearer ')){
//             return res.status(401).json({message: "Unauthorized Access: Token not Available."})
//         }
//         const token = header.split(' ')[1];
//         if(!token){
//             return res.status(401).json({message: "Unauthorized Access: Token Missing"});
//         }

//         let decoded;
//         try{
//             decoded = jwt.verify(token, process.env.JWT_TOKEN);
//         }
//         catch(err){
//             res.status(401).json({message: "Unauthorized Access: Invalid or Token Expired"});
//         }

//         req.user = decoded.id;
//         next();
//     }
//     catch(err){
//         console.error("Server Error.\nError: ", err.message);
//         res.status(500).json({err: true, message: "Server Error"}); // Server Error Status
//     }
// }

// cookie based Toke Auth Check...
exports.protect = async(req, res, next) => {
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message: "Unauthorized Access: Token Missing"});
        }
        let decoded;
        try{
            decoded = jwt.verify(token, process.env.JWT_TOKEN);
        }
        catch(err){
            res.status(401).json({message: "Unauthorized Access: Invalid or Token Expired"});
        }

        req.user = decoded.id;
        next();
    }
    catch(err){
        console.error("Server Error.\nError: ", err.message);
        res.status(500).json({err: true, message: "Server Error"}); // Server Error Status
    }
}

exports.organizerCheck = async(req, res, next) => {
    try{
        const userId = req.user;
        const user = await userModel.findById(userId);
        if(user.role !== 'Organizer'){
            return res.status(403).json({message: "Access Denied!"});
        }

        next();
    }
    catch(err){
        console.error("Server Error.\nError: ", err.message);
        res.status(500).json({err: true, message: "Server Error"}); // Server Error Status
    }
}

exports.userCheck = async(req, res, next) => {
    try{
        const userId = req.user;
        const user = await userModel.findById(userId);
        if(!user){
            return res.status(403).json({message: "Access Denied"});
        }

        if(user.role !== 'User'){
            return res.status(403).json({message: "Access Denied!"});
        }
        next();
    }
    catch(err){
        console.error("Server Error.\nError: ", err.message);
        res.status(500).json({err: true, message: "Server Error"}); // Server Error Status
    }
}