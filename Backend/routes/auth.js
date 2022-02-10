const express=require('express');
const router=express.Router();
const User=require('../Models/User');
const { body, validationResult } = require('express-validator');
//This bcrypt is used for hashing the password
var bcrypt = require('bcryptjs');
//This jsonwebtoken is used for identify the user
var jwt = require('jsonwebtoken');

const JWT_SECRET="Harryisagoodb$oy";
//Create a user using :POST "/api/auth/".Doesnot require Auth



router.post('/createuser',[ body('email','Enter a valid Email').isEmail(),
body('password','Password Must Be atleast 5 characters').isLength({ min: 5 }),
body('name','Enter a valid name').isLength({ min: 3 }),],async(req,res)=>{
 //If there are errors return the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
const salt =await bcrypt.genSalt(10);
const secpass=await bcrypt.hash(req.body.password,salt);
    //create new user
    try{
    let user=await User.findOne({email:req.body.email})
    if(user){
        return res.status(400).json({errors:'Please enter a valid email'});
    }
   user= await User.create({
        email:req.body.email,
        password: secpass,
        name: req.body.name,
      })
      
    //   .then(user => res.json(user))
    //   .catch((err=>{
    //       console.log(err)
    //       res.json({error:'Please Enter a unique value for email'})
    //   }))
    const data={
        user:{
            id:user.id
        }
    }
    const authtoken=jwt.sign(data,JWT_SECRET);
  
    res.json({authtoken});
    }catch(error){
        console.log("error.message");
        res.status(500).send("Some Error Occured");
    }
})
module.exports=router