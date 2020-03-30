import React, { Component } from 'react';
import Recipe from '../recipes/Recipe.js'
import SubmitRecipe from '../recipes/SubmitRecipe.js'
import AskChef from '../recipes/AskChef.js'

class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* header marquee section */}
        <header className="header">
          <div className="main">
            <marquee><h1>todays recipe is brought to you by @andrewF</h1></marquee>
          </div>
          
        </header>

        {/* main page container */}
        <section className='showcase'>
        <a href='/beats'><h1 className='beats'>--- Recipe's ---</h1></a>
          <div className='first'>
            <Recipe/>
          </div>
        </section>
        <SubmitRecipe /><br></br>
        <AskChef />
      </div>
    );
  }
}

export default Dashboard;