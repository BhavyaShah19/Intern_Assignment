const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../keys')
const mongoose = require('mongoose')
const User = require("../models/User");

const login=(req,res,next)=>{
    const token=req.header("auth-token")
    if (!token) {
        return res.status(400).json({err:"You must be logged in"})
    }
    // try {
    //     const data = jwt.verify(token, JWT_SECRET);
    //     req.user = data._id;
    //     next();
    //   } catch (error) {
    //     res.status(401).send({ error: "Please authenticate using a proper token" });
    //   }
    try {
        jwt.verify(token,JWT_SECRET,(err,payload)=>{
            if (err) {
                return res.status(400).json({err:"You must be logged in"})
            }
            const {_id}=payload
            User.findById(_id).then(data=>{
                req.user=data
                next()
            })
        })
    } catch (error) {
        res.status(401).json({ error: "Please authenticate using a proper credentials" });
     }
}

module.exports=login
