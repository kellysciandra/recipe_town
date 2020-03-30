import React, { useState } from 'react';

import PeanutButterPiePage from './PeanutButterPiePage.js'
import Cabbage from './Cabbage.js'
import Pasta from './Pasta.js'
import Salmon from './Salmon.js'


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



















