import React, { useContext } from 'react'

import noteContext from '../Context/Notes/noteContext';
import NoteItem from './NoteItem';
function NotesFrnt() {
  const context=useContext(noteContext);
  const {notes,setnotes}=context;//Taking notes and setnotes from notecontext and it is stored in context
  return (
    <div className='row my-3'>
         <h2 className='text-center my-3'>Your notes</h2>
      {notes.map((note)=>{
        return <NoteItem key={note._id} note={note}/>
      })}
    </div>
  )
}

export default NotesFrnt
