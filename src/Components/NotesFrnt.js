import React, { useContext, useEffect, useRef, useState } from "react";

import noteContext from "../Context/Notes/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
function NotesFrnt() {
  const context=useContext(noteContext);



  const { notes, getNotes,editNote} = context; //Taking notes and setnotes from notecontext and it is stored in context
  useEffect(() => {
    getNotes();
  }, []);
  const handleClick=(e)=>{
    e.preventDefault();
    
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refClose.current.click();
   
}
const onchange=(e)=>{
  setnote({...note,[e.target.name]:e.target.value});//That means note jaisa hai use aise hi rehne dete hain aur replace karte hain empty string ko input ke through
  }
  const ref = useRef(null);
  const refClose = useRef(null)
  const  [note, setnote] = useState({id:" " ,etitle:"",edescription:"",etag:"default"})
  const updateNote = (currentNote) => {
    ref.current.click();
    setnote({id:currentNote._id, etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
  };
  return (
    <>
      <AddNote />

      <div className="container">
        <button
          type="button"
          ref={ref}
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Note
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      value={note.etitle}
                      name="etitle"
                      aria-describedby="emailHelp"
                      onChange={onchange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      value={note.edescription}
                      name="edescription"
                      onChange={onchange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag" value={note.etag}
                      name="etag"
                      onChange={onchange}
                    />
                  </div>
                 
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  ref={refClose}
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" onClick={handleClick} className="btn btn-primary">
                 Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2 className="text-center my-3">Your notes</h2>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} note={note} updateNote={updateNote} />
          );
        })}
      </div>
    </>
  );
}

export default NotesFrnt;
