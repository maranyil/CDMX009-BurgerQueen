import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import NewOrder from './pages/NewOrder'
import IncomingOrder from './pages/IncomingOrder'
import Ready from './pages/ReadyOrders'
import { AuthProvider } from './Auth'
import './firebase'
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className = "App">
      <AuthProvider>
        <Router>
          <Switch>
          <Route exact path = "/" render={() => <Login />}/>
            <PrivateRoute exact path = "/new-order" render={() => <NewOrder />}/>
            <PrivateRoute exact path = "/incoming" render={() => <IncomingOrder />}/>
            <PrivateRoute exact path = "/ready" render={() => <Ready />}/>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
