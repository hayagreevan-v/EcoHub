const express = require('express')

const router = express.Router()

const User = require('../models/userModel')

router.post('/create-user', async(req, res) => {
    const {name, email, _id} =req.body;
    //console.log(req.body);
    try {
    /*const user = new User({
        name: req.body.name,
        email: req.body.email,
        _id: req.body._id,
    });

    
        //const savedUser = await user.save(); 
        await user.save(); */
        const newUser = await User.create({_id, name, email});
        newUser.save().then().catch(e => console.log(e));
        res.status(201).json(user);
        //res.status(200).send({ data: savedUser });
    } catch (err) {
        res.status(400).send({ error: err });
    }    
})


module.exports = router