import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import Login from './pages/Login';
import NewOrder from './components/MenuSelector'
import IncomingOrder from './components/KitchenNotes'
import Ready from './components/ReadyToServe'
import BMenu from './components/Navbar/BMenu';
import Navbar from './components/Navbar/Navbar';
import { AuthProvider } from './Auth'
import './firebase'

function App() {
  const { pathname } = useLocation()  
  return (
    <div className = "App">
      <AuthProvider>
        <Router>
          {pathname !== '/login' &&  <Navbar />}
          {pathname !== '/login' &&  <BMenu />}
          <Switch>
          <Route exact path = "/login" render={() => <Login />}/>
          <Route exact path = "/new-order" render={() => <NewOrder />}/>
          <Route exact path = "/incoming" render={() => <IncomingOrder />}/>
          <Route exact path = "/ready" render={() => <Ready />}/>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
