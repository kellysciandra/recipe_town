
import React, { useState } from 'react';
import { Card, CardImg, CardTitle, CardText, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import cabbage from '../img/cabbage.jpg'





const Cabbage = (props) => {


  return (
    <div>

      <Card className='cookbook_card'>
      <img className='cookbook_image'src={cabbage} alt='cabbage' />
      <section className='section1'>
         <CardTitle><h2>Pickled Cabbage</h2></CardTitle><br></br>
         <CardText>.5 head – Red Cabbage, shaved</CardText>
        <CardText>
        <small className="text-muted">andrew f</small><br></br>
        <span>
        <a href='mailto:afelschow@gmail.com'><i class="far fa-envelope"></i></a>
        </span>
        <span>
        <a href='https://www.instagram.com/felschef/?igshid=y5b95mvtm9ay' ><i class="fab fa-instagram"></i></a>
        </span><br></br>
        <small className="text-muted_update">Last updated 4 days ago</small>
        </CardText>
        </section> 

      <section className='section11'>
        <CardText><h2>Equipment</h2></CardText><br></br>
        <CardText>Medium pot</CardText>
        <CardText>Mandolin (or knife)</CardText>
        <CardText>Cutting board</CardText>
        <CardText>Cheesecloth</CardText>
        <CardText>Twine</CardText>
        <CardText>2 qt Cambro (or similar container)</CardText>
        </section>
    
      <section className='section12'>
        <CardText><h2>Pickling Liquid</h2></CardText><br></br><br></br>
        <CardText>8 oz – Red wine vinegar </CardText>
        <CardText>8 oz – White vinegar</CardText>
        <CardText>8 oz – Apple Cider vinegar</CardText>
        <CardText>12 oz - Raw sugar</CardText>
        <CardText>24 oz - Water</CardText>
        <CardText>1 tsp -  Salt</CardText>
        <CardText>1 T - Honey </CardText>
        <CardText>.5 tsp - Celery seed</CardText>
        <CardText>1 T - Yellow mustard seed</CardText>
        <CardText>1 each – Dried chili</CardText>
        <CardText>.25 tsp - Red pepper flake</CardText>
        <CardText>3 each – Allspice</CardText>
        <CardText>.5 tsp - Caraway</CardText>
        <CardText>1 each - Clove</CardText>
        <CardText>1 each - Bay leaf</CardText>
      </section>
  
      <section>
        <CardText className='section13'>
           1)   Fill cheese cloth with celery seed, mustard seed, chili, red pepper flake, allspice, caraway, clove, and bay leaf to make a sachet. Tie off with twine.<br></br>
           2)   Combine all remaining ingredients, except cabbage, into a pot. Add sachet.<br></br>
           3)   Using a mandolin or sharp knife, shave cabbage into thin (1/8”) pieces.<br></br>
           4)   Heat liquid to a low simmer, 10 - 15 minutes..<br></br>
           5)   Carefully remove sachet and pour pickling liquid over cabbage.<br></br>
           6)   Cool rapidly. Store for up to three months.<br></br><br></br>
        </CardText>
      </section>
      </Card>
    </div>
    
  );
}

export default Cabbage;



















