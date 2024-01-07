const User = require("../models/user.model");
const asyncHandler = require("express-async-handler");

const authController = {
    register: asyncHandler(async (req, res) => {
        const existUser = await User.findOne({email: req.body.email});

        if(existUser){
            return res.status(409).send({message: "Email is already taken !"})
        }

        let newUser = new User(req.body);
        await newUser.save();
        res.status(201).send({message: "Account Created"});
    }),
};

module.exports = authController;