import './App.css';
import { Navbar } from "./Components/Navbar";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Routes/Home';
import Museum from './Routes/Museum';
import Exhibitions from './Routes/Exhibitions';
import Credits from "./Routes/Credits";
import { useState, useEffect } from "react";

function App() {
  const [loadingStatus, setLoadingStatus] = useState({
    loading: false
  });
  const [selectedMuseum, setSelectedMuseum] = useState({
    id: '1',
    name: 'Virginia Museum of Fine Arts'
  });
  
  // ----------- Get Museum information --------------

  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path={"/Exhibitions"}>
            <Exhibitions setSelectedMuseum={setSelectedMuseum} />
          </Route>
          <Route path={"/Museum"}>
            <Museum museum={selectedMuseum}
                    key={"M-" + selectedMuseum.id}
                    city={"Richmond"}
                    state={"VA"}
            />
          </Route>
          <Route path="/Credits">
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
