import NoteContext from './noteContext';
import { useState } from 'react';
const NoteState=(props)=>{
  const s1={
      "name":"rana",
      "class":"5b",
      "roll_no":"1",
  }
  const [state, setstate] = useState(s1);
const update=()=>{
    setTimeout(() => {
        setstate({
            "name":"Souvik",
      "class":"5a",
      "roll_no":"1",
        })
    }, 9000);
}
return(
    <NoteContext.Provider value={{state,update}}>
        {props.children}
    </NoteContext.Provider>
)
}
export default NoteState;