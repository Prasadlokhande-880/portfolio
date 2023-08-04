import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./respons.css";
import icon from "../assets/coma.png"

const respons = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className='respons'>
<Carousel responsive={responsive}>

  <div className='respons_main'>


    <div className='respons_img'>
    <img src="https://www.quantemjeeacademy.com/assets/images/about/about.jpg" alt="" />
    </div>

    <div className='respons_info'>
        <img src={icon} alt="" />

     <p className='talk'>
     Working with Prasad Lokhande has been an absolute pleasure! Their dedication, creativity, and attention to detail were evident from the moment we began collaborating on the Physic Sansar website. Throughout the project, Prasad displayed a remarkable level of professionalism, delivering top-notch work that exceeded our expectations.
     </p>

     <p className='name'>
     Ravi Bhushan Sir
     </p>

     <p className='postion'>
     Quantem JEE founder
     </p>

     <p className='slide_number'>
       <big>1</big>/3
     </p>

    </div>
  </div>


  <div className='respons_main'>
    <div className='respons_img'>
    <img src="https://media.licdn.com/dms/image/C5103AQEAeXJGTcVVGQ/profile-displayphoto-shrink_800_800/0/1535430802204?e=1696464000&v=beta&t=pP6pPPXtDVOKzpKBnNUY1BbuaryVlTtkWtxBtQr-28A" alt="" />
    </div>
    <div className='respons_info'>
    <img src={icon} alt="" />
     <p className='talk'>
     Prasad Lokhande is an exceptional individual with a unique blend of talents and qualities. They are highly motivated and show great dedication to their academic pursuits and personal growth. As a computer engineering , Prasad Lokhade has consistently demonstrated an impressive level of competence and a thirst for knowledge.
     </p>

     <p className='name'>
     Vaishali Wangikar
     </p>

     <p className='postion'>
        First year Dean
     </p>

     <p className='slide_number'>
     <big>2</big>/3
     </p>

    </div>
  </div>



  <div className='respons_main'>
    <div className='respons_img'>
    <img src="https://media.licdn.com/dms/image/C4D03AQHDouCZOYFGNg/profile-displayphoto-shrink_800_800/0/1659377685247?e=1696464000&v=beta&t=E3xiztyWySF-kS853C9Mxk8tBIdqcYnteaiZ3UAmk7M" alt="" />
    </div>
    <div className='respons_info'>
    <img src={icon} alt="" />

     <p className='talk'>
     Prasad is a professional worker who always gives results that are beyond our expectations and always provides solutions to produce better products, thanks for your cooperation
     </p>

     <p className='name'>
     Neeraj Kumar
     </p>

     <p className='postion'>
        Code-Chef Head
     </p>

     <p className='slide_number'>
      <big>3</big>/3
     </p>

    </div>
  </div>

</Carousel>
<hr className='line'></hr>
    </div>
  )
}

export default respons
