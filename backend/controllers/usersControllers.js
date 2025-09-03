const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const genOTP = require('../modules/genOTP');
const sendEmail = require('../modules/sendEmail');

const userModel = require('../models/users/userModel');
const pendingSignupModel = require('../models/users/pendingSignupModel');

exports.pendingSignup = async(req, res) => {
    try{
        const {name, email, password} = req.body;                       // Input Gathering

        // Input Validation
        if(!name || !email || !password){
            return res.status(400).json({message: "All fields are required!!"});
        }
        
        const user = await userModel.findOne({email});                  // Finding User using Email
        
        // User Validation
        if(user){
            return res.status(409).json({message: "Email Already Exists"}); 
        }

        const hashedPassword = await bcrypt.hash(password, 10);         // Hashing the Input Password

        const OTP = genOTP();                                           // OTP generation using genOTP() module
        // await sendEmail(email, OTP);                                    // Sent the OTP using senEmail() module
        console.log(`OTP: ${OTP}`);                                     // For Dev Purposes
        const hashedOTP = await bcrypt.hash(OTP, 10);                   // Hashing the Sent OTP

        // Createion of user in pendingSignup Model for temporary store 
        const pendingUser = await pendingSignupModel.create({name, email, password: hashedPassword, OTP: hashedOTP, OTPExpiry: Date.now() + 15 * 60 * 1000});
        res.status(200).json({email: pendingUser.email, message: "OTP is sent to your given Gmail ID. Please verify it.", redirectTo: '/signup/verify'});
    }
    catch(err){
        console.error("Server Error.\nError: ", err.message);
        res.status(500).json({err: true, message: "Server Error"}); // Server Error Status
    }
}

exports.signup = async(req, res) => {
    try{
        const {email, OTP} = req.body;                                  // Input Gathering

        // Input Validation
        if(!email || !OTP){
            return res.status(400).json({message: "All fields are required!!"});
        }

        const pendingUser = await pendingSignupModel.findOne({email});  // User Checking in 'pendingSignupModel'

        // Pending User Validation
        if(!pendingUser){
            return res.status(409).json({message: "No request find for the gmail"});
        }

        // Expiry Time checking
        if(Date.now() > pendingUser.OTPExpiry){
            await pendingSignupModel.deleteOne({email});                // Deleteing the instance from DB
            return res.status(400).json({message: "OTP Expired!"});
        }
        const validOTP = await bcrypt.compare(OTP, pendingUser.OTP);    // Comparison of OTP

        // OTP Validation
        if(!validOTP){
            return res.status(400).json({message: "OTP Not Matched!"});
        }

        await pendingSignupModel.deleteOne({email});                    // Deleteing the instance from DB
        const user = await userModel.create({name: pendingUser.name, email: pendingUser.email, password: pendingUser.password, createdAt: Date.now()});
        const token = jwt.sign({id: user._id}, process.env.JWT_TOKEN, {expiresIn: '1d'}); // Token Creation
        return res.status(200).json({email: user.email, token, message: "User Successfully Signed Up", redirectTo: '/username'});
    }
    catch(err){
        console.error("Server Error.\nError: ", err.message);
        res.status(500).json({err: true, message: "Server Error"}); // Server Error Status
    }
}

exports.setUsername = async(req, res) => {
    try{
        const {email, username} = req.body;                         // Input Gathering

        // Input Validation
        if(!email || !username){
            return res.status(400).json({message: "All fields are required!!"});
        }
        
        const user_username = await userModel.findOne({username});  // Username Availability
        
        // User Validation based on Username
        if(user_username){
            return res.status(409).json({message: "Username Not Available", available: false});
        }

        const user = await userModel.findOne({email});              // User Checking

        // User Validation based on email
        if(!user){
            return res.status(400).json({message: "User Not Available"});
        }

        user.username = username;                                   // Setting the Username
        await user.save();                                          // Save the DB for Consistency

        res.status(200).json({user: {id: user._id, name: user.name, email: user.email, username: user.username}, message: "Registration Successfully Completed.", redirectTo: '/feed'}); 
    }
    catch(err){
        console.error("Server Error.\nError: ", err.message);
        res.status(500).json({err: true, message: "Server Error"}); // Server Error Status
    }
}