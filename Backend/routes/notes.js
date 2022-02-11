const express=require('express');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../Models/Notes');
const router=express.Router();


//Router1:-- Get All the notes
router.get('/fetchallnotes',fetchuser,async(req,res)=>{
    try{
const notes=await Notes.find({user:req.user.id});
res.json(notes);
    }catch(error){
        console.log("error.message");
        res.status(500).send("Internal Server Error Occured");
    }
})

//Router2:-- Add a new Note using : POST"/api/auth/addnote". Login required
router.post('/addnote',fetchuser,[ 
body('title','Enter a valid title').isLength({ min: 3 }),
body('description','Enter atleast a 5 character of descirption').isLength({ min: 5 }),],async(req,res)=>{
    try{
    const {title,description,tag}=req.body;
    const errors = validationResult(req);
     //If there are errors return the errors and the bad requests
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const note=new Notes({
        title,description,tag,user:req.user.id
    })
    const savedNote=await note.save();
    res.json(savedNote);
}catch(error){
    console.log("error.message");
    res.status(500).send("Internal Server Error Occured");
}
    })

module.exports=router