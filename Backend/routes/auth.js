const express=require('express');
const router=express.Router();
const User=require('../Models/User');
const { body, validationResult } = require('express-validator');
//Create a user using :POST "/api/auth/".Doesnot require Auth
router.post('/',[ body('email','Enter a valid Email').isEmail(),
body('password','Password Must Be atleast 5 characters').isLength({ min: 5 }),
body('name','Enter a valid name').isLength({ min: 3 }),],(req,res)=>{
 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        email:req.body.email,
        password: req.body.password,
        name: req.body.name,
      }).then(user => res.json(user))
      .catch((err=>{
          console.log(err)
          res.json({error:'Please Enter a unique value for email'})
      }))
    
},)
module.exports=router