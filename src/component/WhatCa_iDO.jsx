import React from 'react';
import CountUp from 'react-countup';
import './Whatcanido.css';

const WhatCa_iDO = () => {
  return (
    <div className='WhatCa_iDO_main' id='Services'>
      <p className='WhatCa_iDO_header'>What Can I Do For Your Needs</p>
      <p className='WhatCa_iDO_info'>
        It is easier to entrust the work to the experts because they are able to provide the best results with reliable quality
      </p>

      <div className='countup_class'>
        <div className='first'>
          <div>
            <p className='count' style={{ color: 'rgb(195, 144, 29)' }}>
              <CountUp end={100} enableScrollSpy style={{ color: 'rgb(195, 144, 29)' }} />
              +
            </p>
            <p className='completed'>project completed</p>
          </div>

          <div>
            <p className='count' style={{ color: 'rgb(195, 144, 29)' }}>
              <CountUp end={100} enableScrollSpy style={{ color: 'rgb(195, 144, 29)' }} />
              +
            </p>
            <p className='completed'>project completed</p>
          </div>
        </div>

        <div className='second'>
          <div>
            <p className='count' style={{ color: 'rgb(195, 144, 29)' }}>
              <CountUp end={100} enableScrollSpy style={{ color: 'rgb(195, 144, 29)' }} />
              +
            </p>
            <p className='completed'>project completed</p>
          </div>

          <div>
            <p className='count' style={{ color: 'rgb(195, 144, 29)' }}>
              <CountUp end={100} enableScrollSpy style={{ color: 'rgb(195, 144, 29)' }} />
              +
            </p>
            <p className='completed'>project completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatCa_iDO;
