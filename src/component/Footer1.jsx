import React from 'react';
import './Footer1.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="#">
                Flat 203, morya hills, near kamlesh auto,Pune,Maharashtra,PIN code
412105
                </a>
              </li>
              <li>
                <a href="#">7020821353</a>
              </li>
              <li>
                <a href="#">prasad.lokhande@mitaoe.ac.in</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">UI/UX</a>
              </li>
              <li>
                <a href="#">Web development</a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#">Back-end development</a>
              </li>
              <li>
                <a href="#">React.js</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Github</h4>
            <ul>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cancellation and Refund</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="footer-row">
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="developers">
              <p style={{ textAlign: 'center' }}>
                © 2023{' '}
                <a href="#home">Prasad</a>. All Rights Reserved,
                Developed By MITAOE students{' '}
                <a href="https://www.linkedin.com/in/prasad-lokhande-540020254/">
                  Prasad
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
