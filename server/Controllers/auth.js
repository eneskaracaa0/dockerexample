const AuthSchema=require('../Models/auth.js');
const jwt=require('jsonwebtoken');
const bcryptjs=require('bcryptjs');

const register=async(req,res)=>{
    try {
        const {username,password,email}=req.body;

        const user=await AuthSchema.findOne({email});
        if(user){
            console.log('Email adresiniz sistemde kayıtlı!');
            return res.status(201).json({
                message:'Böyle bir kullanıcı zaten var!'
            })
            
        }
        if(password.length<6){
            return res.json({
                message:'Şifreniz 6 karakterden kücük olmamalı!!'
            })
        }

        const passwordHash=await bcryptjs.hash(password,12);

        if(validateEmail(email)<0){
            return res.status(500).json({message})
        }
        
    } catch (error) {
        
    }
}

const login=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

function validateEmail(emailaddress) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(emailaddress.match(emailRegex))
        return true;

    else return false;
  }


module.exports=[register,login]