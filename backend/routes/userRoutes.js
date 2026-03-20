const express = require('express')
const router = express.Router()
const User = require('../models/userModel.js')
// Sign-up
router.post('/signup',async(req,resp) =>{
  const {email,password} = req.body;
  const user = new User ({email,password})
  await user.save()
  resp.json({success:true,message:"User created"})
})
// login
router.post('/login',async(req,resp) =>{
 const {email,password} = req.body
 const user = await User.findOne({email,password})
 if(!user){
  return resp.send("Invalid user")
 }
 resp.json({success:true,user})
})
// add-score
router.post("/add-score", async (req, res) => {
    const { email, score } = req.body;

    const user = await User.findOne({ email });

    user.scores.push(score);

    if (user.scores.length > 5) {
        user.scores.shift(); // oldest delete
    }

    await user.save();

    res.json(user);
});


// ✅ Draw
router.get("/draw", async (req, res) => {
    const { email } = req.query;

    const user = await User.findOne({ email });

    let randomNumbers = [];

    for (let i = 0; i < 5; i++) {
        randomNumbers.push(Math.floor(Math.random() * 50));
    }

    let match = 0;

    user.scores.forEach(num => {
        if (randomNumbers.includes(num)) {
            match++;
        }
    });

    res.json({
        yourScores: user.scores,
        draw: randomNumbers,
        match
    });
});

module.exports = router;
