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
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNjQ3MzAwMjBkZWJkMjAwOTg0NThhIn0sImlhdCI6MTY0NDU3ODYwOH0.IcLKOdvc65n0rlxwO30Os7TRlpujRa0NkVDA6LI2DAA'
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
      'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNjQ3MzAwMjBkZWJkMjAwOTg0NThhIn0sImlhdCI6MTY0NDY3NjI2OH0.BpK5dk6IA2GRqY3VSUn-JjkC9QFZICSm2d7KbdcDBmk'
    },
  
    body: JSON.stringify({title,description,tag}) 
  });
 

let note= {
  "_id": "6206788b6052c61cb110e396",
  "user": "62064730020debd20098458a",
  "title": title,
  "description": description,
  "tag": tag,
  "date": "2022-02-11T14:54:03.517Z",
  "__v": 0
};
console.log("adding a note")
setnotes(notes.concat(note))//here contact return new array
}
  //Delete a node
const deleteNote=(id)=>{
console.log("Deleting the node"+id);
const newNotes=notes.filter((note)=>{
  return note._id!=id;
  })
  setnotes(newNotes);
}
  //Edit a node
const editNote=async (id,title,description,tag)=>{
  //Api call

  const response = await fetch(`${host}/api/notes/updatenote/62066f6503afc5dd2e513b7f`, {
    method: 'POST', 
   
    headers: {
      'Content-Type': 'application/json',
      'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwNjQ3MzAwMjBkZWJkMjAwOTg0NThhIn0sImlhdCI6MTY0NDY3NjI2OH0.BpK5dk6IA2GRqY3VSUn-JjkC9QFZICSm2d7KbdcDBmk'
    },
  
    body: JSON.stringify({title,description,tag}) 
  });
  const json= response.json(); 

  //Logic to added  in client
  for(let index=0;index<notes.length;index++){
    const element =notes[index];
    if(element._id===id){
      element.title=title;
      element.tag=tag;
      element.description=description;

    }
  }

}



return(
    <NoteContext.Provider value={{notes,setnotes,addNote,deleteNote,editNote,getNotes}} >
        {props.children}
    </NoteContext.Provider>
)
}
export default NoteState;