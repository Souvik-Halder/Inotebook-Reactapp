import React, { useContext } from 'react'
import noteContext from '../Context/Notes/noteContext';

function NoteItem(props) {
  const context=useContext(noteContext);
  const {deleteNote}=context;//Taking notes and setnotes from notecontext and it is stored in context
    const {note}=props;
  return (
    <>
      <div className="col-md-3">
      <div className="card">
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
   
    <p className="card-text">{note.description}</p>
    <i className="fa-solid fa-square-pen mx-2"></i>
    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
   
 
  </div>
 
</div>

      </div>
    </>
  )
}

export default NoteItem
