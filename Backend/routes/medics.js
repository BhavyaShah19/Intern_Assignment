const express = require('express')
const router = express.Router()
const Medics = require('../models/Medics')
const login = require('../middleware/login')

router.get('/fetchnotes', login,async (req, res) => {
    try {
        const medic = await Medics.find({ user: req.user._id })
        res.json(medic)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

router.post('/addnotes', login, async (req, res) => {
    const { name, sickdate, recoverdate ,note} = req.body
    if (!name || !sickdate || !recoverdate) {
        return res.status(400).json({ err: "Please fill all the fields" })
    }
    try {
        const notes = await new Medics({
            name,
            sickdate,
            recoverdate,
            user:req.user._id,
            note
        })
        const savednote = await notes.save();
        res.json(savednote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

router.get('/search',(req,res)=>{
    let pattern = new RegExp(req.body.query)
    if (pattern) {
        Medics.find({ name: { $regex: pattern } })
            .then(notes => {
                res.json(notes)
            }).catch(err => {
                console.log(err)
            })
    }
    else {
        Medics.find().then(notes => { res.json(notes) }).catch(err => { console.log(err) });
    }
})

module.exports = router