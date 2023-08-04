import React from 'react';
import icon1 from '../assets/QuantEm.jpeg';
import icon2 from '../assets/new logo.png';
import icon3 from '../assets/Google.webp';
import icon4 from '../assets/Flipkart-1582211499554.avif';

import './WorkCss.css';

const WorkIn = () => {
  return (
    <div className='worked_with'>
      <div className='work_img'>
        <img src={icon1} alt=''></img>
      </div>
      <div className='work_img'>
        <img src={icon2} alt=''></img>
      </div>
      <div className='work_img'>
        <img src={icon3} alt=''></img>
      </div>
      <div className='work_img'>
        <img src={icon4} alt=''></img>
      </div>
    </div>
  );
};

export default WorkIn;
