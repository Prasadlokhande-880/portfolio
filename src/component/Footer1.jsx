import React from 'react';
import './Footer1.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <FooterColumn title="Contact Us">
            <ul>
              <li>
                <a href="#">
                  Flat 203, Morya Hills, Near Kamlesh Auto, Pune, Maharashtra, PIN Code 412105
                </a>
              </li>
              <li>
                <a href="#">7020821353</a>
              </li>
              <li>
                <a href="mailto:prasad.lokhande@mitaoe.ac.in">prasad.lokhande@mitaoe.ac.in</a>
              </li>
            </ul>
          </FooterColumn>

          <FooterColumn title="Services">
            <ul>
              <li><a href="#">UI/UX</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Back-end Development</a></li>
              <li><a href="#">React.js</a></li>
            </ul>
          </FooterColumn>

          <FooterColumn title="Github">
            <ul>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cancellation and Refund</a></li>
            </ul>
          </FooterColumn>
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
                © 2023 <a href="#home">Prasad Lokhande</a>. All Rights Reserved. Developed by MITAOE Students.
                Resume: <a href='https://www.linkedin.com/in/prasad-lokhande-540020254/'>Prasad Lokhande</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => (
  <div className="footer-col">
    <h4>{title}</h4>
    {children}
  </div>
);

export default Footer;
