import React, { useContext } from 'react'

import noteContext from '../Context/Notes/noteContext';
import NotesFrnt from './NotesFrnt';

export default function Home() {
 
  return (
    <div>
      <div className="container">
      <h2 className='text-center my-3'>Add a  note</h2>

{/* form code starts from here */}
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

{/* Form code ends here */}
<NotesFrnt/>
   
      </div>
    </div>
  )
}
