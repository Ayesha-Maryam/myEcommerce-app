import { compare } from 'bcrypt';

import { comparePassword,hashPassword} from '../helpers/authHelper.js';

import userModel from '../models/userModel.js';
import JWT from 'jsonwebtoken';
export const registerController=async(req,res)=>{
    try{
const {name,email,password,phone,address,answer}=req.body

if(!name || !name.trim())
{
    return res.send({
        message:'Name is required'
    });
}
if(!email)
{
    return res.send({
        message:'Email is required'
    })
}if(!password)
{
    return res.send({
        message:'Password is required'
    })
}if(!phone)
{
    return res.send({
        message:'Phone is required'
    })
}if(!address)
{
    return res.send({
        message:'Address is required'
    })

}
if(!answer)
{
    return res.send({
        message:'Answer is required'
    })
    
}
const exsistingUser=await userModel.findOne({
    email
})
if (exsistingUser)
{
    return res.status(200).send({
        success: false,
        message:'Already registered! Please login',

    })
    
    

}
const hashedPassword=await hashPassword(password)
// const user=new userModel({name,email,phone,address,password:hashedPassword}).save()
// const user = await new userModel({ name, email, phone, address, password: hashedPassword }).save();

// res.status(201).send({
//     success:true,
//     message:'User registered successfully',
    const user = new userModel({ name, email, phone, address, password: hashedPassword,answer });
    await user.save();
    
    res.status(201).send({
        success: true,
        message: 'User registered successfully',
        user,
    });
    
    
// })

    }
    catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message: 'Error in registration',
            error
        })
    }

};
export const logincontroller=async(req,res)=>{
    try{
const {email,password}=req.body
if(!email||!password)
{
return res.status(404).send({
    success:false,
    message:'Invalid Email or Password'
})
}
const user=await userModel.findOne({email})
if(!user)
{
    return res.status(404).send({
        success:false,
        message:'Email is not registered'
    })
}
const match=await comparePassword(password,user.password)
if(!match)
{
    return res.status(200).send({
        success:false,
        message:'Invalid Password'
    })
}
const token=await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d",});
res.status(200).send({
    success:true,
    message:'Login Successfully!',
    user:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address
    },
    token,
});
}
    catch(error){
        console.log(error.message);
        res.status(500).send({
            success:false,
            message:'Error in login',
            error:error.message
        })
    }
};
export const forgotPasswordController=async(req,res)=>{
    try{
const {email,answer,newPassword}=req.body
if(!email)
{
    res.status(400).send({
        message:'Email is required',
    })
}
if(!answer)
{
    res.status(400).send({
        message:'Answer is required',
    })
}
if(!newPassword)
{
    res.status(400).send({
        message:'New Password is required',
    })
}
const user=await userModel.findOne({
    email,answer
})
if(!user)
{
    return res.status(404).send({
        success:false,
        message:'Wrong Email or Answer',
    })
}
const hashed=await hashPassword(newPassword)
await userModel.findByIdAndUpdate(user._id,{password:hashed})
res.status(200).send({
    success:true,
    message:'Password reset Succesfully'
})
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send({

            success:false,
            message:'Something went wrong',
            error
        })
    }
};
export const testController=(req,res)=>{
    res.send('Protected Routes');

}