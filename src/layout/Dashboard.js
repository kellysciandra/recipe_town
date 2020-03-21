import React, { Component } from 'react';
import Recipe from '../recipes/Recipe.js'
import SubmitRecipe from '../recipes/SubmitRecipe.js'

class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* header marquee section */}
        <header className="header">
          <div className="main">
            <marquee><h1>today's recipe is brought to you by: andrew f.</h1></marquee>
          </div>
        </header>

        {/* main page container */}
        <section className='showcase'>
        <a href='/beats'><h1 className='beats'>--- Recipe's ---</h1></a>
          <div className='first'>
            <Recipe/>
          </div>
        </section>
        <SubmitRecipe />
      </div>
    );
  }
}

export default Dashboard;