import React from 'react';
import logo from '../Asset/logo.jpeg';




const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark banner">
      <div className="container-fluid">
      <img src={logo} alt="NGO logo"  class="logo"/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Programs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active don" aria-current="page" href="#">
                Donate
              </a>
            </li>
          </ul>
        </div>
        <section className="main_heading1">
      <div className="container" id="detail">
        <h1>
          Together We Can <br />
          <span>THE WORLD</span>
        </h1>
        <p>
          Every day we bring hope to millions of children in the world's hardest places as a sign of God's unconditional love.
        </p>
        <button className="btn1">DONATE NOW</button>
        <button className="btn2">JOIN US NOW</button>
      </div>
    </section>
      </div>
    </nav>
    </div>
  );
}

export default Header;
