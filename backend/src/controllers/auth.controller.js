import User from "../models/User.js";

export const signup = async(req,res) =>{
    const {fullName,email,password} = req.body

    try{
        if(!fullname || !email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        if(password.length < 6){
            return res.status(400).json({message:"password must be atleast 6 charecters long"});
        }
        const emailRegex = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";
        if(!email.test(emailRegex)){
            return res.status(400).json({message:"Invalid email"});
        }

        const user = await User.findOne({email:email});
        if(user) return res.status(400).json({message:"Email already exists"});
        
    }catch{

    }
};