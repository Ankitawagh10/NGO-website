import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import ch2 from "../Asset/ch2.jpeg";
import g7 from "../Asset/g7.jpeg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="newsLetterContainer">
        <img src={ch2} alt="ch2" />
          <p>Heaven fruitful doesn't over lesser in days. Appear creeping.</p>
          <input type="email" name="email" placeholder="Enter your email id" required="" />
          <button className="btn4">SUBSCRIBE</button>
        </div>

        <div className="linksContainer">
          <div className="title">JOIN US LINKS</div>
          <ul>
            <li>
              <a href="#homeSection">Home</a>
            </li>
            <li>
              <a href="#aboutSection">About Us</a>
            </li>
            <li>
              <a href="#programsSection">Programs</a>
            </li>
            <li>
              <a href="#educationSection">Education</a>
            </li>
            <li>
              <a href="#gallerySection">Gallery</a>
            </li>
            <li>
              <a href="#joinSection">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="connectionContainer">
          <div className="title">Contact with us</div>
          <p>kamptee, Nagpur<br />440099, Nagpur</p>
          <p>kamp@nagpur.com</p>
          <p>91+3345334567</p>
        </div>
        <img src={g7} alt="g7"  />
        </div>
     <hr />
        <br />
        <div className="icon">
          <ul>
            <li>
            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
          </li>
          <li>
            <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
          </li>
          </ul>
        </div>
        
        <div className="col">
          <p>© 2023 All rights reserved | This website is made with ❤️ by Ankita</p>
        </div>
  </footer>
    
  );
}

export default Footer;
