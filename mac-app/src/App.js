import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
// import { useState } from "react";    // TODO

import { Navbar } from "./Components/Navbar";
import Home from './Routes/Home';
import Exhibitions from './Routes/Exhibitions';
import Credits from "./Routes/Credits";


function App() {
  
  // ----------- Render Page --------------------------------------------------
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          
          <Route path={"/Exhibitions"}>
            <Exhibitions />
          </Route>

          <Route path="/Credits">
            <Credits />
          </Route>
          
          <Route path="/">
            <Home />
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
