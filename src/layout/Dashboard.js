import React, { Component } from 'react';
import Recipe from '../recipes/Recipe.js'
import SubmitRecipe from '../forms/SubmitRecipe.js'
import AskChef from '../forms/AskChef.js'

class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* header marquee section */}
        <header className="dash_header">
          <div className="main">
            <marquee><h1>todays recipe is brought to you by @andrewF</h1></marquee>
          </div>
          
        </header>

        {/* main page container */}
        <section >
       <h1 className='beats'>--- latest ---</h1>
        <Recipe/>
        </section>
        <SubmitRecipe /><br></br>
        <AskChef />
      </div>
    );
  }
}

export default Dashboard;