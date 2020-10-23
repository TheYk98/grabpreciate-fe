import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar"
import Nominate from "./components/Nominate"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/profile/:userId" component={Profile} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/nominate" component={Nominate} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
