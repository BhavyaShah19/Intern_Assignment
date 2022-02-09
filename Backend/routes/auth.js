const express = require('express')
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require('../keys');


router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.status(400).json({ err: "Please fill out all the fields" })
    }
    try {
        let user = await User.findOne({ email: email })
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }
        const salt = await bcrypt.genSalt();
        const hashedpass = await bcrypt.hash(password, salt)
        const users = new User({
            name: name,
            email: email,
            password: hashedpass
        })
        users.save().then(
            res.status(200).json({ message: "Account created sucessfully" })
        )
    } catch (error) {
        return res.status(200).json({ error: error })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    let success=false;
    if (!email || !password) {
        success=false
        return res.status(400).json({success, err: "Please fll all the fields" })
        
    }
    try {
        const user = await User.findOne({ email: email })
        if (!user) {
            success=false
            return res.status(400).json({success, err: "User not found" })
        }
        const pass = await bcrypt.compare(password, user.password)
        if (!pass) {
            success=false
            return res.status(400).json({ success,err: "Password didn't match" })
        }
        else {
            const token = jwt.sign({ _id: user._id }, JWT_SECRET)
            success=true
            return res.json({success, token })
        }
    } catch (error) {
        return res.status(400).json({error:error})
    }
})

module.exports=router