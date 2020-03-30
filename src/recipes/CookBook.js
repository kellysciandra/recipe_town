import React, { useState } from 'react';
import { Card, CardImg, CardTitle, CardText, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import pasta1 from '../img/pasta1.png'
import pasta2 from '../img/pasta2.png'
import pasta3 from '../img/pasta3.png'
import cabbage from '../img/cabbage.jpg'
import PeanutButterPiePage from './PeanutButterPiePage.js'


const items = [
  {
    src: pasta1,
    altText: 'Slide 1',
  },
  {
    src: pasta2,
  },
  {
    src: pasta3,
    altText: 'Slide 3',
  }
];

const CookBook = (props) => {
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
    <div className='mobile_height'>
      <h3>cook/book</h3>
      <Card className='cookbook_card'>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      <section className='section1'>
        <CardTitle><h2>Pasta</h2></CardTitle>
        <CardText>250 g – ‘00’ Tipo flour</CardText>
        <CardText>2 each – Whole eggs (room temperature)</CardText>
        <CardText>4 each – Egg yolks (room temperature) </CardText>
        <CardText>
        <small className="text-muted">andrew f</small><br></br>
        <span>
        <a href='mailto:afelschow@gmail.com'><i class="far fa-envelope"></i></a>
        </span>
        <span>
        <a href='https://www.instagram.com/felschef/?igshid=y5b95mvtm9ay' ><i class="fab fa-instagram"></i></a>
        </span><br></br>
        <small className="text-muted_update">Last updated 3 days ago</small>
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
        7)    Allow noodles to air dry for at least an hour<br></br><br></br>
        </CardText>
      </section>
      </Card>

      <Card className='cookbook_card'>
      <img className='cookbook_image'src={cabbage} alt='cabbage' />
      <section className='section1'>
         <CardTitle><h2>Pickled Cabbage</h2></CardTitle>
         <CardText>.5 head – Red Cabbage, shaved</CardText>
        <CardText>
        <small className="text-muted">andrew f</small><br></br>
        <span>
        <a href='mailto:afelschow@gmail.com'><i class="far fa-envelope"></i></a>
        </span>
        <span>
        <a href='https://www.instagram.com/felschef/?igshid=y5b95mvtm9ay' ><i class="fab fa-instagram"></i></a>
        </span><br></br>
        <small className="text-muted_update">Last updated 3 days ago</small>
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
        <CardText><h2>Pickling Liquid</h2></CardText><br></br>
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
           6)   Cool rapidly. Store for up to three months.<br></br>
        </CardText>
      </section>
      </Card>
      <PeanutButterPiePage />
    </div>
    
  );
}

export default CookBook;



















