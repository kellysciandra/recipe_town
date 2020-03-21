import React from 'react';
import { Route, Router, Switch } from 'react-router-dom'

//styling
import './App.css';
import './index.css'

//components
import Dashboard from './layout/Dashboard'
import NavBar from './layout/NavBar'
import Footer from './layout/Footer'
import SubmitRecipe from './recipes/SubmitRecipe.js'
import AskChef from './recipes/AskChef.js'


//history
import history from './history'

function App() {
  return (
    <div>

        <Router history={history}>
          <NavBar />
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/submitrecipe" component={SubmitRecipe}/>
          <Route exact path="/askchef" component={AskChef}/>
          <Footer />
        </Router>

    </div>
  );
}

export default App;
