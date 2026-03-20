const express = require("express");
const router = express.Router();
const User = require("../models/userModel.js");
const adminAuth = require('../middleware/adminauth.js');


// ✅ Admin Login (optional)
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email === "admin@gmail.com" && password === "12345") {
        res.json({ message: "Admin Login Success ✅" });
        
    } else {
        res.send("Invalid Admin ❌");
    }
});


// ✅ Get All Users
router.post("/all-users", adminAuth, async (req, res) => {
    const users = await User.find();
    res.json(users);
});


// ✅ Run Draw for ALL users
router.post("/run-draw", adminAuth, async (req, res) => {

    const users = await User.find();

    let randomNumbers = [];

    for (let i = 0; i < 5; i++) {
        randomNumbers.push(Math.floor(Math.random() * 50));
    }

    let results = [];

    users.forEach(user => {
        let match = 0;

        user.scores.forEach(num => {
            if (randomNumbers.includes(num)) {
                match++;
            }
        });

        results.push({
            email: user.email,
            match
        });
    });

    res.json({
        draw: randomNumbers,
        results
    });
});

module.exports = router;