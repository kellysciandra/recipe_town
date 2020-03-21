import React, { Component } from 'react';
import Recipe from '../recipes/Recipe.js'

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
        <a href='/beats'><h1 className='beats'>--- Recipe ---</h1></a>
          <div className='first'>
            <Recipe/>
          </div>

          {/* <div className='second'>
          <div className='showcase_btn3'><a href='/login'><h1 className='artist'>artist</h1></a></div>
          <div className='showcase_btn4'></div>
         
          </div>

          <div className='third'>     
          <div className='showcase_btn5'><a href='/login'><h1 className='producer'>producer</h1></a></div>
          <div className='showcase_btn6'></div> */}
    
          {/* </div> */}
        </section>
      </div>
    );
  }
}

export default Dashboard;