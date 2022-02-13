import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/Notes/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    });
    }
  return (
   <>
   <NoteState>
   <Router>
    
   <Navbar/>
   <Alert alert={alert}/>
   <Routes>
        <Route path="/" element={<Home showAlert={showAlert}/>} />

        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login showAlert={showAlert}/>} />
        <Route path="/signup" element={<Signup showAlert={showAlert}/>} />
      </Routes>
      </Router>
      </NoteState>
   </>
  );
}

export default App;
