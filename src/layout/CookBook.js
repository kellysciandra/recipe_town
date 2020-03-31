import React, { useState } from 'react';


import PeanutButterPiePage from '../recipes/PeanutButterPiePage.js'
import Cabbage from '../recipes/Cabbage.js'
import Pasta from '../recipes/Pasta.js'
import Salmon from '../recipes/Salmon.js'
import Test from '../recipes/Test.js'



const CookBook = () => {


  return (
    <div className='mobile_height'>
      <h3>cook/book</h3>
      <Salmon />
      <Cabbage />
      <Pasta />
      <PeanutButterPiePage />
    </div>
    
  );
}

export default CookBook;



















