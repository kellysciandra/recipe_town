import React, { useState } from 'react';
import { Card, CardImg, CardTitle, CardText, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';


import PeanutButterPieSlice from '../img/PeanutButterPieSlice.png'

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
        <img className='cookbook_image'src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div>
  
      <Card className='cookbook_card'>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      <section className='section1'>
      <CardTitle><h2>Peanut Butter Pie</h2></CardTitle><br></br>
         <CardTitle><h2>Crust</h2></CardTitle>
         <CardText>1 Package - Oreos</CardText>
         <CardText>4 Tablespoons – Butter, unsalted </CardText>
        <CardText>
        <small className="text-muted">andrew f</small><br></br>
        <span>
        <a href='mailto:afelschow@gmail.com'><i class="far fa-envelope"></i></a>
        </span>
        <span>
        <a href='https://www.instagram.com/felschef/?igshid=y5b95mvtm9ay' ><i class="fab fa-instagram"></i></a>
        </span><br></br>
        <small className="text-muted_update">Last updated 5 hours ago</small>
        </CardText>
        </section> 

      <section className='section11_pbpie'>
        <CardText><h2>Filling</h2></CardText><br></br>
        <CardText>1 cup - Heavy cream</CardText>
        <CardText>8 oz. - Cream cheese (room temperature)</CardText>
        <CardText>1 ¼ cups - Creamy peanut butter</CardText>
        <CardText>¾ cup - Packed light brown sugar</CardText>
        <CardText>1 Tablespoon - Pure vanilla extract</CardText>
        </section>
    
      <section className='section12'>
        <CardText><h2>Chocolate Ganache Topping</h2></CardText><br></br>
        <CardText>1 cup – Heavy Cream </CardText><br></br>
        <CardText>½ cup – Semi-sweet Chocolate</CardText>
      </section>
  
      <section>
        <CardText className='section13'>
           Additional toppings (optional)<br></br>
           Approximate amounts, to taste:<br></br>
           ¼ cup – Dry roasted, salt peanuts, chopped<br></br>
           2 Tablespoons – Dark or semi-sweet chocolate shavings<br></br>
           2 Tablespoons - Reserved Oreo Crumble<br></br><br></br>
        </CardText>
      </section>
      </Card>
    </div>

  );
}

export default PeanutButterPiePage;



















