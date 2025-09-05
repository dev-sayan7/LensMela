const jwt = require('jsonwebtoken');

exports.protect = async(req, res, next) => {
    try{
        const header = req.headers.authorization;
        if(!header || !header.startsWith('Bearer ')){
            return res.status(401).json({message: "Unauthorized Access: Token not Available."})
        }
        const token = header.split(' ')[1];
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