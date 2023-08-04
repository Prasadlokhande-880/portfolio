import React from 'react'
import icon from "../assets/22654-6-man.png"
import './About.css';

const About = () => {
  return (
    <div className='About' id='Contact'>
      <div className='Abput_info' >
        <p className='About_header'>
        Let's Hire Me And Make
The Best Product
        </p>

        <p className='About_info'>
        Contact me if you are interested in entrusting your work to me, or you can check out my youtube channel to see how I work, thanks
        </p>
        <a href='https://www.linkedin.com/in/prasad-lokhande-540020254/' target="_blank">
        <button className='linkin_button'>
        Linkedin
        </button>
        </a>
      </div>
      <div className='About_img'>
        <img src={icon} alt="" />
      </div>
    </div>
  )
}

export default About
