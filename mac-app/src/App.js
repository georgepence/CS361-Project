// import logo from './logo.svg';   todo
import './App.css';
// import Chicodog from "./Components/Chico";  todo
import { Navbar } from "./Components/Navbar";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Routes/Home';
import Exhibitions from './Routes/Exhibitions';
import Credits from "./Routes/Credits";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path={"/Exhibitions"}>
            <Exhibitions/>
          </Route>
          <Route path="/Credits">
            <Credits/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        <div id={"footer"}>
          <p id={"footer-text"}>
            Website by <a href={"/Credits"} className={"credits"}>
            Mac Pence</a> and the <a href={"/Credits"} className={"credits"}>
            Dauntless Design Team </a></p>
        </div>
      </Router>
    </div>
  );
}

export default App;
