
import React, { useState } from 'react';
import { Card, CardImg, CardTitle, CardText, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import salmon from '../img/salmon.png'





const Salmon = (props) => {
  return (
    <div>
      <Card className='cookbook_card'>
      <img className='cookbook_image'src={salmon} alt='cabbage' />
      <section className='section1'>
         <CardTitle><h2>Honey-Sesame Salmon</h2></CardTitle><br></br>
         <CardText>8 oz - Salmon Filet, skinless</CardText>
         <CardText>1 T - Sesame Oil</CardText>
         <CardText>Grape Seed or Canola Oil</CardText>
         <CardText> 1 T - Sesame Seeds</CardText>
         <CardText>¼ cup - Honey </CardText>
         <CardText>½ tsp - Red chili flakes</CardText>
         <CardText>2 sprigs - Fresh cilantro, chopped</CardText>
         <CardText>1 tsp - Rice vinegar </CardText>
        <CardText>
        <small className="text-muted">andrew r</small><br></br>
        <span>
        <a href='mailto:cpprovisions@gmail.com'><i class="far fa-envelope"></i></a>
        </span>
        <span>
        <a href='https://instagram.com/akrobinson424?igshid=1oegn5s7di46u' ><i class="fab fa-instagram"></i></a>
        </span><br></br>
        <small className="text-muted_update">Last updated 3 minutes ago</small>
        </CardText>
        </section> 

      <section className='section11_salmon'>
      <CardText><h2>Equipment</h2></CardText><br></br>
        <CardText>Knife</CardText>
        <CardText>Cutting board</CardText>
        <CardText>Fish Spatula</CardText>
        <CardText>Whisk</CardText>
        <CardText>Medium plate</CardText>
        <CardText>Medium sauté pan, preferably non-stick</CardText>
        <CardText>Sheet pan</CardText>
        <CardText>Spoon</CardText>
        <CardText>Medium bowl</CardText>
        </section>
    
      <section className='section12_salmon'>
      <CardText><h2>Honey Sesame Sauce</h2></CardText><br></br>
        <CardText>In a mixing bowl whisk together honey, vinegar, sesame oil, sesame seeds, red chili flakes, and cilantro. Whisk together rapidly and set aside. 
      </CardText>

      </section>
  
      <section>
        <CardText className='section13'>
           1)   Preheat oven to 400 degrees. Remove salmon from refrigeration and place on plate. Season with salt and let sit out for 10 minutes at room temperature. <br></br>
           2)   Pour canola or grape seed oil into a skillet on high heat. As oil begins to smoke, gently place salmon into pan. Let salmon sear for a minute creating a nice crust. Flip over and sear the other side for thirty seconds. <br></br>
           3)   Remove from pan and place salmon on a sheet pan or oven safe skillet. Pour sauce over salmon and place into your oven at 400 degrees. Once the sauce begins to bubble and create a glaze the salmon is ready. <br></br>
           4)   Remove from oven and serve with desired side dish. <br></br>
        </CardText>
      </section>
      </Card>
    </div>
    
  );
}

export default Salmon;