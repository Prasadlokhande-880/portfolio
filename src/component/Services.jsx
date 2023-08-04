import React, { useEffect, useState } from 'react';
import icon1 from '../assets/design.png';
import icon2 from '../assets/coding(1).png';
import icon3 from '../assets/mobile-development.png';
import './Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);

  const onclickshow_more = (n) => {
    if (n === 1) {
      setValue1((prevValue) => !prevValue);
    } else if (n === 2) {
      setValue2((prevValue) => !prevValue);
    } else {
      setValue3((prevValue) => !prevValue);
    }
  };


  return (
    <div>

          <p className='Services_header'>
        My Services
       </p>

    <div className='Services_main'>

         {/* this is the code for the first block */}

    <div className='Services_block first_ser' data-aos="zoom-in-up">
      <span className='Services_img'>
        <img src={icon1} />
      </span>
        <p className='main_Services'>
        UI/UX Design
        </p>
        <p className='main_Services_info'>
        Create a beautiful and usefull u displav for ease of use of the application for users8 .
        </p >
          {value1 ? <p className='main_Services_info'>Our UI design embraces a clean and clutter-free layout, allowing users to focus on what matters most—the content and features of the application. </p> : <p></p> }
        <p className='show_more' onClick={()=>onclickshow_more(1)}>
        {value1 ? <p>show less &#8593;</p> : <p>show more &#8594;</p> }
        </p>
    </div>

        {/* this is the code for the second block */}
    <div className='Services_block second_ser'  data-aos="zoom-in-up">
    <span className='Services_img'>
        <img src={icon2} />
      </span>
      <p className='main_Services'>
      Web Programming
        </p>
        <p className='main_Services_info'>
        Build a quality website with the best technology and optimzation on search engines .
        </p>
          {value2 ? <p className='main_Services_info'>Understand the purpose of your website and identify your target audience. Knowing your goals and audience will help you tailor the design and content to meet their needs effectively.</p> : <p></p> }
        <p className='show_more' onClick={()=>onclickshow_more(2)}>
        {value2? <p>show less &#8593;</p> : <p>show more &#8594;</p> }
        </p>
    </div>

        {/* this is the code for the third block */}
    <div className='Services_block third_ser' data-aos="zoom-in-up">
    <span className='Services_img'>
        <img src={icon3} />
      </span>
      <p className='main_Services '>
      Mobile Develooment
        </p>
        <p className='main_Services_info'>
        Create an app from your own business for more professinoal business performane .
        </p>
        {value3 ? <p className='main_Services_info'>ProBizPerf is a comprehensive business productivity and performance app designed to streamline professional tasks and enhance overall business efficiency. </p> : <p></p> }
        <p className='show_more' onClick={()=>onclickshow_more(3)}>
        {value3? <p>show less &#8593;</p> : <p>show more &#8594;</p> }
        </p>
    </div>

    </div>

    </div>
  )
}

export default Services
