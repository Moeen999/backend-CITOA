import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

const registerUser = async (req, res) => {
    try {
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"All fields are required"});
        }

        const isUserAlreadyReg = await User.findOne({email});
        if(isUserAlreadyReg){
            return res.status(400).json({message:"User with this email is already registered"});
        }

        const saltValue = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, saltValue);

        // const newUser = new User({
        //     name,
        //     email,
        //     password: hashedPassword
        // });

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();
        return res.status(201).json({
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            },
            message:"User registered successfully"});

    } catch (error) {
        return res.status(500).json({message:"Internal server error"});
    }
}


export {registerUser};