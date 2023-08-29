import React from 'react';
import img from '../assets/pngwing.com(2).png';
import './Header.css'; // Import the CSS file
import icon1 from '../assets/facebook(1).png';
import icon2 from '../assets/github.png';
import icon3 from '../assets/instagram(1).png';
import icon4 from '../assets/linkedin.png';

const Header = () => {
  return (
    <div className='main_header' id='home'>
      <div className='header_info'>
        <p className='i_am'>I'm</p>
        <p className='my_name font-effect-neon'>Prasad Lokhande</p>
        <div className='colorline'></div>
        <p className='infomation_webdev'>
          A freelancer who provides services for digital programming and design content needs, for all businesses with
          more than 10 years of experience
        </p>

        <div className='links'>
          <ul>
            <li>
              <a ><img src={icon1} alt='' /></a>
            </li>
            <li>
              <a href='https://github.com/' ><img src={icon2} alt='' /></a>
            </li>
            <li>
              <a  href='https://instagram.com/prasadlokhande880?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'><img src={icon3} alt='' /></a>
            </li>
            <li>
              <a href='https://www.linkedin.com/home?originalSubdomain=in'><img src={icon4} alt='' /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className='Drop'>
        <img src={img} alt='my_img'></img>
      </div>
    </div>
  );
};

export default Header;
