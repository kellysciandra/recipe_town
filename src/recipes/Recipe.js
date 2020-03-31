import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText} from 'reactstrap';
import PeanutButterPieSlice from '../img/PeanutButterPieSlice.png'
import PBPieSend from '../recipe_forms/PBPieSend.js'

class Recipe extends Component {
  render() {
    return (
      <div>
        <Card className='card'>
        <CardImg className="picture" src={PeanutButterPieSlice} alt="Card image cap" />
          {/* <a href='/pbpie'>show me more</a> */}
          <section className='mainbox_special'>
          <CardTitle><h1>Peanut Butter Pie</h1></CardTitle>
          <CardTitle><h2>Crust</h2></CardTitle>
          <CardText>1 Package - Oreos</CardText>
          <CardText>4 Tablespoons – Butter, unsalted </CardText><br></br>
          <CardText><h2>Filling</h2></CardText>
          <CardText>1 cup - Heavy cream</CardText>
          <CardText>8 oz. - Cream cheese (room temperature)</CardText>
          <CardText>1 ¼ cups - Creamy peanut butter</CardText>
          <CardText>¾ cup - Packed light brown sugar</CardText>
          <CardText>1 Tablespoon - Pure vanilla extract</CardText>
          <CardText>
            <small className="text-muted">andrew f</small><br></br>
            <span>
            <a href='mailto:afelschow@gmail.com'><i class="far fa-envelope"></i></a>
              </span>
              <span>
              <a href='https://www.instagram.com/felschef/?igshid=y5b95mvtm9ay' ><i class="fab fa-instagram"></i></a>
                </span><br></br>
            <small className="text-muted_update">Last updated 3 mins ago</small>
            <PBPieSend/>
          </CardText>
          </section> 
      </Card>
      </div>
    );
  }
}

export default Recipe;




// felschef
// Spinach Scarpinocc / mascarpone / mozzarella / white miso / lemon juice / lemon zest / lemon thyme / roasted garlic / red pepper flake / black pepper / 
// Himalayan salt #pasta #00 #flour #eggs #spinach #cheese #miso #scratch #cooking #bartonspringsmill #love