import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText} from 'reactstrap';
import pasta1 from '../img/pasta1.png'
import pasta2 from '../img/pasta2.png'
import pasta3 from '../img/pasta3.png'

class Recipe extends Component {
  render() {
    return (
      <div>
        <h3>cook/book</h3>
        <Card className='cookbook_card'>
        {/* <CardImg className="cookbook_image" src={pasta1} alt="Card image cap" />
        <CardImg className="cookbook_image" src={pasta2} alt="Card image cap" /> */}
        <CardImg className="cookbook_image" src={pasta3} alt="Card image cap" />
          <section className='section1'>
          <CardTitle><h2>Pasta</h2></CardTitle>
          <CardText>250 g – ‘00’ Tipo flour</CardText>
          <CardText>2 each – Whole eggs (room temperature)</CardText>
          <CardText>4 each – Egg yolks (room temperature) </CardText>
       
          <CardText>
            <small className="text-muted">andrew f</small><br></br>
            <span>
            <i class="far fa-envelope"></i>
              </span>
              <span>
              <i class="fab fa-instagram"></i>
                </span><br></br>
            <small className="text-muted_update">Last updated 3 mins ago</small>
          </CardText>
          </section> 
          <section>
          <CardText className='section2'>
          1)   Pile flour on worksurface and form a well with the eggs.<br></br>
          2)   Using a fork, begin to incorporate eggs and flour together. Using your bench knife and hands, work the dough into a ball.<br></br>
          3)   With your hands, knead dough 10-12 minutes, until smooth. Rest dough 1 hour.<br></br>
          4)   Divide dough into four equal parts.<br></br>
          5)   Using your pasta machine, start on the widest setting, Roll dough through the first setting 2-3x, then roll sheet through a progressively narrower setting until desired thickness.<br></br>
          6)   Cut dough sheets into desired lengths. Switch to pasta cutter attachment, and run pasta sheets through to cut pasta. Alternately, fold pasta sheets and cut into desired thickness with a knife.<br></br>
          7)    Allow noodles to air dry for at least an hour<br></br>
          </CardText>
          </section>
          
      </Card>
      </div>
    );
  }
}

export default Recipe;



