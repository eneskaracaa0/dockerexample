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
            return res.status(500).json({message:'Email formatı dışında bir şeyler girdiniz.'})
        }

        const newUser=await AuthSchema.create({username,email,passwordHash})

        const token=await jwt.sign({id:newUser._id},"SECRET_KEY",{expiresIn:'1h'});
        res.status(201).json({
            status:"OK",
            newUser,
            token
        })
        
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }
}

const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await AuthSchema.findOne(email)

        if(!user){ //Girilen email aratıldıgında kayıtlı değilse
            return res.status(500).json({message:"Böyle bir kullanıcı bulunamadı!"});
        }

        const passwordCompare=await bcryptjs.compare(password,user.password) //Girilen şifre, kullanıcının dbde kayıtlı şiferesi bcrype ile çözümle karşılaştır

        if(!passwordCompare){
            return res.status(500).json({message:"Girilen şifre yanlış"});
        }

        const token=await jwt.sign({id:user._id},"SECRET_KEY",{expiresIn:'1h'});
        res.status(201).json({
            status:"OK",
            user,
            token
        })
        
    } catch (error) {
        return res.status(500).json({message:error.message})

    }
}

function validateEmail(emailaddress) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(emailaddress.match(emailRegex))
        return true;

    else return false;
  }


module.exports=[register,login]