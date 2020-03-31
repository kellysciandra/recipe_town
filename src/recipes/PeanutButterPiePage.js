import React, { useState } from 'react';
import { Card, CardImg, CardTitle, CardText, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';


import PeanutButterPieSlice from '../img/PeanutButterPieSlice.png'
import PBPieSend from '../recipe_forms/PBPieSend.js'
const items = [
  {
    src: PeanutButterPieSlice,
  }
];

const PeanutButterPiePage = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className='picture'src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Card className='card'>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    
      <section className='mainbox'>
        <CardTitle><h2>Peanut Butter Pie</h2></CardTitle>
          <CardText>
          <small className="text-muted">andrew f</small><br></br>
          <span>
          <a href='mailto:afelschow@gmail.com'><i class="far fa-envelope"></i></a>
          </span>
          <span>
          <a href='https://www.instagram.com/felschef/?igshid=y5b95mvtm9ay' ><i class="fab fa-instagram"></i></a>
          </span><br></br>
          <small className="text-muted_update">Last updated 5 hours ago</small>
          <PBPieSend/>
          </CardText>
        </section> 
      
        <section className='first'>
          <CardTitle><h2>Crust</h2></CardTitle>
          <CardText>
            1 Package - Oreos <br></br>
            4 Tablespoons – Butter, unsalted <br></br> 
         </CardText>
        </section>
      

        <section className='second'>
          <CardText><h2>Filling</h2></CardText>
            <CardText>
              1 cup - Heavy cream<br></br>
              8 oz. - Cream cheese (room temperature)<br></br>
              1 ¼ cups - Creamy peanut butter<br></br>
              ¾ cup - Packed light brown sugar<br></br>
              1 Tablespoon - Pure vanilla extract<br></br>
            </CardText>
        </section>
    
        <section className='third_special1'>
          <CardText><h2>Chocolate Ganache Topping</h2></CardText>
            <CardText>
              1 cup – Heavy Cream<br></br>
              ½ cup – Semi-sweet Chocolate
            </CardText>
            <span>
              Additional toppings (optional)<br></br>
              Approximate amounts, to taste:<br></br>
              ¼ cup – Dry roasted, salt peanuts, chopped<br></br>
              2 Tablespoons – Dark or semi-sweet chocolate shavings<br></br>
              2 Tablespoons - Reserved Oreo Crumble<br></br><br></br>
            </span>
          </section>
  
      <section  className='fourth'>
        <CardText>
        <h4>CRUST</h4>
          1) Pre-heat oven to 350F<br></br>
          2) Place Oreos in a food processor (do not remove the cream filling) and pulverize until only fine crumbs remain. If you do not have a food processor, place cookies in a Ziploc bag (let all of the air out before sealing) and beat with a rolling pin. (Good option for stress relief.) Set aside 2 Tablespoons of crumble for garnish.<br></br> 
          2) In a small pot, gently melt butter and drizzle over cookie crumbs. Stir until well-combined.<br></br>
          4) Pour cookie crumbs into pie pan and use your hands and/or the clean bottom of a measuring cup to tamp crumbs tightly into the bottom and sides of your pan.<br></br>
          5) Bake crust bake at 350F for 8 minutes and then allow to cool completely before filling.<br></br><br></br>

          <h4>Filling</h4>
          1) With a stand mixer fitted with the whisk attachment, whisk the cream at high speed until it forms stiff peaks. Transfer to a large clean bowl and set aside.<br></br>
          2) Fit the stand mixer with the paddle attachment and a clean bowl. Add the cream cheese, peanut butter, brown sugar, and vanilla and beat at high speed until the mixture is smooth.<br></br>
          3) Gently fold the cream cheese-peanut butter mixture into the whipped cream with a spatula until completely blended. Spoon into the cooled pie shell and smooth out the top.<br></br><br></br>
          
          <h4>Ganache</h4>
          1) Over a double boiler, melt chocolate with heavy cream until fully combined. (Alternately, you can use a microwave, stir frequently) Allow to cool slightly before garnishing pie.<br></br><br></br>

         <h4> Finish with chopped peanuts, Oreo crumble, and chocolate shavings if desired.<br></br>
          Place pie in the freezer to set for 30 minutes. Refrigerate for up to 5 days or freeze for up to 3 months.<br></br>
          </h4>
        </CardText>
      </section>
      </Card>
    </div>

  );
}

export default PeanutButterPiePage;



















