import React from 'react';
import './App.css';
import Home from './Pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Sidebar from './Pages/Home/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
      <Switch>
      <Route path="/about">
        <Sidebar />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;