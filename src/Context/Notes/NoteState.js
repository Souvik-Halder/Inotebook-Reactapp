import NoteContext from './noteContext';
import { useState } from 'react';
const NoteState=(props)=>{
  const host="http://localhost:5000";
  const notesinitial=[]
  const [notes, setnotes] = useState(notesinitial)

  //Get all notes
  const getNotes=async()=>{

    //Api call
  
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', 
     
      headers: {
        'auth-token':localStorage.getItem('token'),
      },
    
    });
    const json=await response.json();

   setnotes(json);
  }


//Add a node
const addNote=async(title,description,tag)=>{

  //Api call

  const response = await fetch(`${host}/api/notes/addnote`, {
    method: 'POST', 
   
    headers: {
      'Content-Type': 'application/json',
      'auth-token':localStorage.getItem('token')
    },
  
    body: JSON.stringify({title,description,tag}) 
  });
 
const note=await response.json();
setnotes(notes.concat(note))//here contact return new array
}
  //Delete a node
 
const deleteNote=async (id)=>{
  //Api call
  const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
    method: 'DELETE', 
   
    headers: {
      'Content-Type': 'application/json',
      'auth-token':localStorage.getItem('token')
    },
  
    
  });
  const json= await response.json(); 

const newNotes=notes.filter((note)=>{
  return note._id!=id;
  })
  setnotes(newNotes);
}
  //Edit a node
const editNote=async (id,title,description,tag)=>{
  //Api call

  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: 'PUT', 
   
    headers: {
      'Content-Type': 'application/json',
      'auth-token':localStorage.getItem('token')
    },
  
    body: JSON.stringify({title,description,tag}) 
  });
  const json= await response.json(); 
  
    let newNotes=JSON.parse(JSON.stringify(notes))
  //Logic to added  in client
  for(let index=0;index<notes.length;index++){
    const element =newNotes[index];
    if(element._id===id){
      newNotes[index].title=title;
      newNotes[index].tag=tag;
      newNotes[index].description=description;
      break;
    }
   
  }
  setnotes(newNotes);

}



return(
    <NoteContext.Provider value={{notes,setnotes,addNote,deleteNote,editNote,getNotes}} >
        {props.children}
    </NoteContext.Provider>
)
}
export default NoteState;