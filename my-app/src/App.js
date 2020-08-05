import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import NewOrder from './components/MenuSelector'
import IncomingOrder from './components/KitchenNotes'
import Ready from './components/Ready'
import BMenu from './components/Navbar/BMenu';
import Navbar from './components/Navbar/Navbar';
import './firebase'

function App() {

  return (
    <div className = "App">
       <Router>
        <Navbar />
        <BMenu />
        <Switch>
         <Route exact path = "/login" render={() => <Login />}/>
         <Route exact path = "/new-order" render={() => <NewOrder />}/>
         <Route exact path = "/incoming" render={() => <IncomingOrder />}/>
         <Route exact path = "/ready" render={() => <Ready />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
