import React,{useEffect} from 'react';
import './Products.css';
import icon from '../assets/case-study.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import icon1 from "../assets/6e5710d312e21becc14fc63c3c4ae1b6.png"
import icon2 from "../assets/UI_01.jpg"

const Products = () => {


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    const [first, setfirst] = useState(false);

    // this is the function for on click event
    const onclick = () => {
        setfirst((prevFirst) => !prevFirst);
      };

  return (

      <div className='Products' id="Products" >
            <p className='Products_header'>Products</p>
        <div className='Products_main'>

            <div className='port_Products'data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                <div className='port_Products_info'>
                    <span>
                        <p className='port_Products_info_header'>
                            Web design
                        </p>
                        <p className='port_Products_info_sub'>
                            coffe shop website
                        </p>
                    </span>
                    <span className='case_study'>
                    <img src={icon} alt="" /> case study
                    </span>
                </div>

        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c00c6c137633973.620e6ef7165db.png" alt="" />
        </div>


        <div className='port_Products' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                <div className='port_Products_info'>
                    <span>
                    <p className='port_Products_info_header'>
                            website
                        </p>
                        <p className='port_Products_info_sub'>
                            physics sansar
                        </p>
                    </span>
                    <span className='case_study'>
                    <img src={icon} alt="" /> case study
                    </span>
                </div>

        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c00c6c137633973.620e6ef7165db.png" alt="" />
        </div>


        <div className='port_Products' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                <div className='port_Products_info'>
                    <span>
                    <p className='port_Products_info_header'>
                            website
                        </p>
                        <p className='port_Products_info_sub'>
                        disease prediction
                        </p>
                    </span>
                    <span className='case_study'>
                    <img src={icon} alt="" /> case study
                    </span>
                </div>

        <img src="https://i.pinimg.com/originals/7d/f2/ae/7df2aef313baea7457920e9ce44445fb.png" alt="" />
        </div>


        <div className='port_Products' data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
                <div className='port_Products_info'>
                    <span>
                    <p className='port_Products_info_header'>
                            App
                        </p>
                        <p className='port_Products_info_sub'>
                            Hotel Booking App
                        </p>
                    </span>
                    <span className='case_study'>
                       <img src={icon} alt="" /> case study
                    </span>
                </div>

        <img src="https://assets.materialup.com/uploads/b099ddf6-9497-454d-8c55-d095c800e6d2/preview.png" alt="" />
        </div>

 { first ? <>
<div className='port_Products' data-aos="fade-up"
data-aos-anchor-placement="bottom-bottom">
        <div className='port_Products_info'>
            <span>
            <p className='port_Products_info_header'>
                    App
                </p>
                <p className='port_Products_info_sub'>
                    DBMS Project on the cricket teams
                </p>
            </span>
            <span className='case_study'>
               <img src={icon} alt="" /> case study
            </span>
        </div>

<img src={icon1} alt="" />
</div>


<div className='port_Products' data-aos="fade-up"
data-aos-anchor-placement="bottom-bottom">
        <div className='port_Products_info'>
            <span>
            <p className='port_Products_info_header'>
                    App
                </p>
                <p className='port_Products_info_sub'>
                    Collage Codechef Website
                </p>
            </span>
            <span className='case_study'>
               <img src={icon} alt="" /> case study
            </span>
        </div>

<img src={icon2} alt="" />
</div></>
:<></>
}


      </div>
      <div className="portfolio_span">
        {first ? (
          <button className="portfolio" onClick={onclick}>
            Less portfolio
          </button>
        ) : (
          <button className="portfolio" onClick={onclick}>
            More portfolio
          </button>
        )}
      </div>
    </div>
  )
}

export default Products
