const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Atlas is Ready...");
    }
    catch(err){
        console.error("MongoDB Atlas is not Ready Yet...");
        process.exit(1);
    }
}

module.exports = connectDB;