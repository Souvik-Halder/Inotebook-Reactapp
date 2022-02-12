import React, {useContext, useState } from 'react'
import noteContext from '../Context/Notes/noteContext';


function AddNote() {
    const context=useContext(noteContext);
  const {notes,addNote}=context;//Taking notes and setnotes from notecontext and it is stored in context
  const  [note, setnote] = useState({title:"",description:"",tag:"default"})
const onchange=(e)=>{
setnote({...note,[e.target.name]:e.target.value});//That means note jaisa hai use aise hi rehne dete hain aur replace karte hain empty string ko input ke through
}
const handleClick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
}
  return (
    <div>
          <div className="container">
      <h2 className='text-center my-3'>Add a  note</h2>

{/* form code starts from here */}
      <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title"aria-describedby="emailHelp" onChange={onchange}/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name='description' onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name='tag' onChange={onchange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
</form>

{/* Form code ends here */}

   
      </div>
    </div>
  )
}

export default AddNote