const router = require("express").Router();
const User = require("../models/user");
//Sign UP

router.post("/sign-up",async(req,res)=> {
 try{
    const {username, email, password, address} = req.body;
    // check username length is more than 3
    if(username.length<4) {
        return res
        .status(400)
        .json({ message: "Username Length should be greater than 3"});

    }
    // check username already exits?
    const existingUsername = await User.findOne({ username: username});
    if (existingUsername) {
        return res.status(400).json({ message: "Username already exits"});

    }

    // check username already exits?
    const existingEmail = await User.findOne({ email: email});
    if (existingEmail) {
        return res.status(400).json({ message: "Email already exits"});

    }

    // check Password's length
    if (password.length <=5){
        return res
        .status(400)
        .json({ message: "password's Length should be greater than 5"});

    }

    const newUser = new User({
        username: username,
        email : email,
        password: password,
        address: address,
    });
    await newUser.save();
    return res.status(200).json({ message: "SignUp successfully"});

     
} catch(error){


    res.status(500).json({ message: "Internal server Error"});
 }
});