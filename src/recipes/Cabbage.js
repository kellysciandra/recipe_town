
import React, { useState } from 'react';
import { Card, CardImg, CardTitle, CardText, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import cabbage from '../img/cabbage.jpg'
import CabbageSend from '../recipe_forms/CabbageSend.js'




const Cabbage = (props) => {

  return (
    <div>
    
      <Card className='card'>
      <img className='picture'src={cabbage} alt='cabbage' />   
      <section className='mainbox'>
        <CardTitle><h2>Pickled Cabbage</h2></CardTitle>
        <CardText>
        <small className="text-muted">andrew f</small><br></br>
        <span>
        <a href='mailto:afelschow@gmail.com'><i class="far fa-envelope"></i></a>
        </span>
        <span>
        <a href='https://www.instagram.com/felschef/?igshid=y5b95mvtm9ay' ><i class="fab fa-instagram"></i></a>
        </span><br></br>
        <small className="text-muted_update">Last updated 4 days ago</small><br></br>
        <CabbageSend />
        </CardText>
      </section> 

             
      <section className='first'>
        <CardText><h2>Ingredients</h2></CardText>
          <CardText>In a mixing bowl whisk together honey, vinegar, sesame oil, sesame seeds, red chili flakes, and cilantro. Whisk together rapidly and set aside. 
          </CardText>
        </section>

        <section className='second'>
        <CardText><h2>Pickling Liquid</h2></CardText>
        <CardText>
          8 oz – Red wine vinegar<br></br>
          8 oz – White vinegar<br></br>
          8 oz – Apple Cider vinegar<br></br>
          12 oz - Raw sugar<br></br>
          24 oz - Water<br></br>
          1 tsp -  Salt<br></br>
          1 T - Honey<br></br>
          .5 tsp - Celery seed<br></br>
          1 T - Yellow mustard seed<br></br>
          1 each – Dried chili<br></br>
          .25 tsp - Red pepper flake<br></br>
          3 each – Allspice<br></br>
          .5 tsp - Caraway<br></br>
          1 each - Clove<br></br>
          1 each - Bay leaf<br></br>
        </CardText>
      </section>

        
      <section className='third_special'>
        <CardText><h2>Equipment</h2></CardText>
        <CardText>
          Medium pot<br></br>
          Mandolin (or knife)<br></br>
          Cutting board<br></br>
          Cheesecloth <br></br>
          Twine<br></br>
          2 qt Cambro (or similar container)<br></br>
        </CardText>
      </section>
    
      <section  className='fourth'>
        <CardText>
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




















