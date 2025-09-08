const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image/')){
        cb(null, true);
    }
    else{
        cb(new Error('Only Image Files are allowed'), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: {fileSize: 10 * 1024 * 1024}
});

module.exports = upload