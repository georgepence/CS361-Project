import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useState } from "react";

import { Navbar } from "./Components/Navbar";
import Home from './Routes/Home';
import Exhibitions from './Routes/Exhibitions';
import Credits from "./Routes/Credits";

function App() {
  
  // State and State setters to control what the user sees
  const [ selectedMuseumId, setSelectedMuseumId ] = useState('');
  const [ largePicture, setLargePicture ] = useState('');
  const [ show, setShow ] = useState({
    rvaMuseums: true,
    museum: false,
    museumExhibits: false,
    exhibitions: false
  })
  
  // ----------- Render Page --------------------------------------------------
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          
          <Route path={"/Exhibitions"}>
            <Exhibitions setSelectedMuseumId={setSelectedMuseumId}
                         selectedMuseumId={selectedMuseumId}
                         show={show}
                         setShow={setShow}
                         largePicture={largePicture}
                         setLargePicture={setLargePicture}
            />
          </Route>

          <Route path="/Credits">
            <Credits />
          </Route>
          
          <Route path="/">
            <Home setSelectedMuseumId={setSelectedMuseumId}
                  selectedMuseumId={selectedMuseumId}
                  show={show}
                  setShow={setShow}
                  largePicture={largePicture}
                  setLargePicture={setLargePicture}
            />
          </Route>
          
        </Switch>
        <div id={"footer"}>
          <p id={"footer-text"}>
            Website by <a href={"/Credits"}
                          className={"credits"}
                          title={"View information about the web designer."}
          >
            Mac Pence</a> and the <a href={"/Credits"} className={"credits"}>
            Dauntless Design Team </a></p>
          <p id={"admin"}>Amin</p>
        </div>
      </Router>
    </div>
  );
}

export default App;
