import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewOrder from './pages/NewOrder'
import IncomingOrder from './pages/IncomingOrder'
import Login from './pages/Login';
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

        </Switch>
      </Router>
    </div>
  );
}

export default App;
