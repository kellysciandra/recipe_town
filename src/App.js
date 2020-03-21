import React from 'react';
import { Route, Router, Switch } from 'react-router-dom'

//styling
import './App.css';
import './index.css'

//components
import Dashboard from './layout/Dashboard'
import NavBar from './layout/NavBar'
import Footer from './layout/Footer'

//history
import history from './history'

function App() {
  return (
    <div>

        <Router history={history}>
          <NavBar />
          <Route exact path="/" component={Dashboard}/>
          <Footer />
        </Router>

    </div>
  );
}

export default App;
