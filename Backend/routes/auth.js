const express=require('express');
const router=express.Router();
const User=require('../Models/User');
const { body, validationResult } = require('express-validator');
//This bcrypt is used for hashing the password
var bcrypt = require('bcryptjs');
//This jsonwebtoken is used for identify the user
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET="Harryisagoodb$oy";


//Router1:--Create a user using :POST "/api/auth/".Doesnot require Auth

router.post('/createuser',[ body('email','Enter a valid Email').isEmail(),
body('password','Password Must Be atleast 5 characters').isLength({ min: 5 }),
body('name','Enter a valid name').isLength({ min: 3 }),],async(req,res)=>{
 //If there are errors return the errors and the bad requests
 let success=false;
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
        return res.status(400).json({success,errors:'Please enter a valid email'});
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
   success=true;
    res.json({success,authtoken});
    }catch(error){
        console.log("error.message");
        res.status(500).send("Internal Server Error Occured");
    }
})



//Router 2:--Login the user in "localhost:3000/api/auth/login"
router.post('/login',[ body('email','Enter a valid Email').isEmail(),
body('password','Password cannot be blank').exists({ min: 5 })
],async(req,res)=>{
let success=false;
//If there are errors return bad request and the errors
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}


const{email,password}=req.body;
try{
    //Matching with the user in the database
let user=await User.findOne({email});
if(!user){
    success=false;
    return res.status(400).json({success, error:"please try to login with correct credentials"})
}
const passwordCompare=await bcrypt.compare(password,user.password);
if(!passwordCompare){
    success=false
    return res.status(400).json({success, error:"please try to login with correct credentials"})
}
const data={
    user:{
        id:user.id
    }
}
const authtoken=jwt.sign(data,JWT_SECRET);
success=true;
res.json({success,authtoken});
}catch(error){
    console.log("error.message");
    res.status(500).send("Internal Server  Error Occured");
}

})

//Router3:-- Get loggedin User Details using POST "/api/auth/getuser".Login required
router.post('/getuser',fetchuser,async(req,res)=>{

try{
userId=req.user.id;
const user =await  User.findById(userId).select("-password")
res.send(user);
}catch(error){
    console.log("error.message");
    res.status(500).send("Internal Server  Error Occured");
}
})



module.exports=router