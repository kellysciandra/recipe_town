import React from 'react';
import { Route, Router, Switch } from 'react-router-dom'

//styling
import './App.css';
import './index.css'

//components
import Dashboard from './layout/Dashboard'
import NavBar from './layout/NavBar'
import Footer from './layout/Footer'
import SubmitRecipe from './forms/SubmitRecipe.js'
import AskChef from './forms/AskChef.js'
import CookBook from './layout/CookBook.js'
import Test from './recipes/Test.js'

// recipes
import PeanutButterPiePage from './recipes/PeanutButterPiePage';
import Cabbage from './recipes/Cabbage'
import Salmon from './recipes/Salmon'
import Pasta from './recipes/Pasta'

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
          <Route exact path="/cookbook" component={CookBook}/>
          <Route exact path="/test" component={Test}/>


          {/* recipes */}
          <Route exact path="/pbpie" component={PeanutButterPiePage}/>
          <Route exact path="/honeysalmon" component={Salmon}/>
          <Route exact path="/cabbage" component={Cabbage}/>
          <Route exact path="/pasta" component={Pasta}/>
          <Footer />
        </Router>

    </div>
  );
}

export default App;
