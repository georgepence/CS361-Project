import './App.css';
import { Navbar } from "./Components/Navbar";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Routes/Home';
// import Museum_Old from './Routes/Museum_Old';
import Exhibitions from './Components/Exhibitions';
import Credits from "./Routes/Credits";
import { useState } from "react";

function App() {
  const [selectedMuseum, setSelectedMuseum] = useState('');
  
  // ----------- Get Museum_Old information --------------
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path={"/Exhibitions"}>
            <Exhibitions setSelectedMuseum={setSelectedMuseum} />
          </Route>
          {/*<Route path={`/Museum_Old`}>*/}
          {/*  <Museum_Old id={selectedMuseum}*/}
          {/*          city={"Richmond"}*/}
          {/*          state={"VA"}*/}
          {/*  />*/}
          {/*</Route>*/}
          <Route path="/Credits?dog=chico">
            <Credits />
          </Route>
          <Route path="/">
            <Home setSelectedMuseum={setSelectedMuseum} />
          </Route>
        </Switch>
        <div id={"footer"}>
          <p id={"footer-text"}>
            Website by <a href={"/Credits"} className={"credits"} title={"View information about the web designer."}>
            Mac Pence</a> and the <a href={"/Credits"} className={"credits"}>
            Dauntless Design Team </a></p>
        </div>
      </Router>
    </div>
  );
}

export default App;
