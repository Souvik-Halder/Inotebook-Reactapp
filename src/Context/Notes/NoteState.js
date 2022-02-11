import NoteContext from './noteContext';
import { useState } from 'react';
const NoteState=(props)=>{
  const notesinitial=[
    {
      "_id": "620659e98524ee1362578d07",
      "user": "62064730020debd20098458a",
      "title": "Mytitle",
      "description": "MY description",
      "tag": "personal",
      "date": "2022-02-11T12:43:21.861Z",
      "__v": 0
    },
    {
      "_id": "62066cc0be2516dd73ca393b",
      "user": "62064730020debd20098458a",
      "title": "Mytitle",
      "description": "MY description",
      "tag": "personal",
      "date": "2022-02-11T14:03:44.336Z",
      "__v": 0
    },
    {
      "_id": "6206788b6052c61cb110e396",
      "user": "62064730020debd20098458a",
      "title": "Mytitle",
      "description": "MY description",
      "tag": "personal",
      "date": "2022-02-11T14:54:03.517Z",
      "__v": 0
    }
  ]
  const [notes, setnotes] = useState(notesinitial)
return(
    <NoteContext.Provider value={{notes,setnotes}} >
        {props.children}
    </NoteContext.Provider>
)
}
export default NoteState;