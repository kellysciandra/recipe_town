import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText} from 'reactstrap';
import egg from '../img/egg.png'


class Recipe extends Component {
  render() {
    return (
      <div>
        <Card className='recipe_card'>
        <CardImg className="recipe_image" src={egg} alt="Card image cap" />
          <section className='recipe_section'>
          <CardTitle><h2>Hummus</h2></CardTitle>
          <CardText>roasted oyster mushroom</CardText>
          <CardText>grilled kale</CardText>
          <CardText>butter toasted pine nuts</CardText>
          <CardText>pickled fennel</CardText>
          <CardText>lemon</CardText>
          <CardText>chili oil</CardText>
          <CardText>fennel fronds</CardText>
          <CardText>
            <small className="text-muted">andrew f</small><br></br>
            <span>
            <i class="far fa-envelope"></i>
              </span>
              <span>
              <i class="fab fa-instagram"></i>
                </span><br></br>
            <small className="text-muted">Last updated 3 mins ago</small>
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