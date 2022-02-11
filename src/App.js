import logo from './logo.svg';
import './App.css';
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

function App() {
  return (
   <>
   <NoteState>
   <Router>
     <Alert message={"This is amazing react course"}/>
   <Navbar/>
   <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/about" element={<About/>} />
      </Routes>
      </Router>
      </NoteState>
   </>
  );
}

export default App;
