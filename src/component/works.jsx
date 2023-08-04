import React from 'react';
import './works.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from 'react';

const Works = () => {


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [value1,function1]=useState(false);
  const [value2,function2]=useState(false);
  const [value3,function3]=useState(false);


  const moreinfo = (n) => {
    if (n === 1) {
      function1((prevState) => !prevState);
    } else if (n === 2) {
      function2((prevState) => !prevState);
    } else if (n === 3) {
      function3((prevState) => !prevState);
    }
  };




  return (
    <div className='main_class_work'>
  <hr className='line'></hr>
      {/* this is the code for the first block */}
      <div className='work_block' data-aos="fade-up"
     data-aos-duration="2000">
        <span className='work_info'>
          <img src="https://www.mindinventory.com/blog/wp-content/uploads/2023/05/mobile-ux-design-best-practices.webp" alt="UX Design" />
          <div>
            <p className='work_header'>UI/UX Design</p>
            <p className='no_project'>10 projects</p>
          </div>
        </span>

        <span className='arrow' onClick={() => moreinfo(1)}>
          { value1 ? <p>&#8595;</p> :<p>&#8594;</p> }
        </span>
      </div>
      { value1 ? <div className='open-search' data-aos="fade-up"
     data-aos-duration="1000">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti laboriosam sit, doloribus perspiciatis aliquam non ducimus commodi nostrum similique magnam id, error modi vero tenetur. Corrupti dolorem quos excepturi expedita?
      </div> : <p/> }
      <hr className='line'></hr>

      {/* this is the code for the second block */}
      <div className='work_block' data-aos="fade-up"
     data-aos-duration="2000">
        <span className='work_info'>
          <img src="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg" alt="Front End Development" />
          <div>
            <p className='work_header'>Front End Development</p>
            <p className='no_project'>20 projects</p>
          </div>
        </span>

        <span className='arrow' onClick={() => moreinfo(2)}>
        { value2 ? <p>&#8595;</p> :<p>&#8594;</p> }
        </span>
      </div>
      { value2 ? <div className='open-search' data-aos="fade-up"
     data-aos-duration="1000">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti laboriosam sit, doloribus perspiciatis aliquam non ducimus commodi nostrum similique magnam id, error modi vero tenetur. Corrupti dolorem quos excepturi expedita?
      </div> : <p/> }

      <hr className='line'></hr>

      {/* this is the code for the third block */}
      <div className='work_block' data-aos="fade-up"
     data-aos-duration="2000">
        <span className='work_info'>
          <img src="https://www.appmysite.com/blog/wp-content/uploads/2022/10/Mobile-app-development.png" alt="Mobile App Development" />
          <div>
            <p className='work_header'>Mobile App Development</p>
            <p className='no_project'>5 projects</p>
          </div>
        </span>

        <span className='arrow' onClick={() => moreinfo(3)}>
        { value3 ? <p>&#8595;</p> :<p>&#8594;</p> }
        </span>
      </div>
      { value3 ?<div className='open-search'data-aos="fade-up"
     data-aos-duration="1000">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti laboriosam sit, doloribus perspiciatis aliquam non ducimus commodi nostrum similique magnam id, error modi vero tenetur. Corrupti dolorem quos excepturi expedita?
      </div> : <p/> }

      <hr className='line'></hr>

    </div>
  );
}

export default Works;
