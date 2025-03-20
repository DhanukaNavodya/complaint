const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const User = require('../Model/user.modal');

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

let upload = multer({ storage, fileFilter });

// ✅ Route to Add a New User
router.post('/add', upload.single('photo'), async (req, res) => {
    try {
        const { name, birthdate } = req.body;
        const photo = req.file ? req.file.filename : null;

        const newUser = new User({ name, birthdate, photo });

        await newUser.save();
        res.json({ message: 'User Added', user: newUser });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ✅ Route to Get All Users with Image URLs
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        const usersWithImages = users.map(user => ({
            ...user._doc,
            photoUrl: user.photo ? `http://localhost:5000/images/${user.photo}` : null
        }));

        res.json(usersWithImages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
