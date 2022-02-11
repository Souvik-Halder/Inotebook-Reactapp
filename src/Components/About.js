import React from 'react'
import { useContext,useEffect } from 'react'
import noteContext from '../Context/Notes/noteContext'

function About() {
  const a=useContext(noteContext);
   useEffect(() => {
 a.update();
  }, [])
  
  return (
    <div>
      THis is about {a.state.name} His class is {a.state.class} His roll no is {a.state.roll_no}
    </div>
  )
}

export default About
