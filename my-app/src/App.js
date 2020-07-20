import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewOrder from './pages/NewOrder'
import IncomingOrder from './pages/IncomingOrder'
import BMenu from './components/Navbar/BMenu';
import Navbar from './components/Navbar';
import firebase from './firebase'

function App() {
  // const [data, setData] = useState([]);

  return (
    <div className = "App">
      <Router>
      <Navbar />
      <BMenu />
        <Switch>
         <Route exact path="/" />
         <Route exact path="/new-order" render={() => <NewOrder />}/>
         <Route exact path="/incoming" render={() => <IncomingOrder />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
