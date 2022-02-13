import React, { useContext } from 'react'

import noteContext from '../Context/Notes/noteContext';
import AddNote from './AddNote';
import NotesFrnt from './NotesFrnt';

export default function Home(props) {
 const {showAlert}=props
  return (
    <div>
    
    <NotesFrnt showAlert={showAlert}/>
    </div>
  )
}
