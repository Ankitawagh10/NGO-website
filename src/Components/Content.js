import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUsers, faDollarSign } from '@fortawesome/free-solid-svg-icons';



import b6 from "../Asset/b6.jpeg";
import g2 from "../Asset/g2.jpeg";
import g4 from "../Asset/g4.jpeg";
import g7 from "../Asset/g7.jpeg";
import b1 from "../Asset/b1.jpeg";
import e2 from "../Asset/e2.jpeg";
import g9 from "../Asset/g9.jpeg";
import b2 from "../Asset/b2.jpeg";
import e4 from "../Asset/e4.jpeg";
import b3 from "../Asset/b3.jpeg";
import g8 from "../Asset/g8.jpeg";

const Contents = () => {
  return (
    <div>
      {/* ABOUT US */}
      <section className="main_heading">
        <div className="container" id="aboutSection">
          <h2 className="sectionTitle">About Us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti dicta ex error quae dolor perspiciatis sequi perferendis doloremque asperiores impedit? Aut repellat nemo ea voluptatem nulla tempora illo similique, illum dicta id? Rerum architecto ipsa exercitationem mollitia eius est! Ipsa debitis similique repellat iusto illum, sint rem quidem accusamus velit veniam repudiandae harum laboriosam qui dolore inventore, tempore culpa incidunt quaerat? Quae nostrum ipsum tenetur totam amet quia, repellendus, perspiciatis, praesentium quos necessitatibus alias tempore nesciunt veniam commodi est natus.
          </p>
          <div className="cards">
            <div className="donationBox" id="donation1">
            <FontAwesomeIcon icon={faHeart} id="i1" />
              <div className="title">Give Donation</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus culpa dolore, aspernatur nostrum soluta placeat impedit cum iusto? Earum, consectetur?
              </p>
              <button>
                Donate Now
              </button>
            </div>
            {/* -------------Donation box end-------- */}
            <div className="volunteerBox" id="donation2">
            <FontAwesomeIcon icon={faUsers} id="i1" />
              <div className="title">Become A volunteer</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus culpa dolore, aspernatur nostrum soluta placeat impedit cum iusto? Earum, consectetur?
              </p>
              <button>
                Become Now
              </button>
            </div>
            {/* -------------Donation box end-------- */}
            <div className="scholershipBox" id="donation3">
            <FontAwesomeIcon icon={faDollarSign} id="i1" />
              <div className="title">Give Scholarship</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus culpa dolore, aspernatur nostrum soluta placeat impedit cum iusto? Earum, consectetur?
              </p>
              <button>
                Give Immediately
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="programs" id="programsSection">
        <div className="container">
          <h2 className="sectionTitle">Programs</h2>
          <div className="boxContainer">
            <div className="box">
              <div className="cardImage"></div>
              <div className="programTitle">Education to every childern</div>
              <div className="donationCount">
                Donation Goal: <span>10,000</span>
              </div>
              <button>Donate Now</button>
            </div>
            {/* ---------end box------- */}
            <div className="box">
              <div className="cardImage"></div>
              <div className="programTitle">Make life easier for them</div>
              <div className="donationCount">
                Donation Goal: <span>20,000</span>
              </div>
              <button>Donate Now</button>
            </div>
            {/* ---------box end---- */}
            <div className="box">
              <div className="cardImage"></div>
              <div className="programTitle">Dedicating to helping kids</div>
              <div className="donationCount">
                Donation Goal: <span>15,000</span>
              </div>
              <button>Donate Now</button>
            </div>
            {/* -------end box---- */}
            <div className="box">
              <div className="cardImage"></div>
              <div className="programTitle">Clean Water for people</div>
              <div className="donationCount">
                Donation Goal: <span>15,000</span>
              </div>
              <button>Donate Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------GALLERY -------------------------*/}
      <section className="main_heading my-5 my-4">
        <div className="text-center">
          <h2 className="display-4">Gallery</h2>
          <hr className="w-25 mx-auto" />{/* mx-auto mobile responsive keliye lagate hai */}
        </div>
        <div className="container">
          <div className="row item gx-2 my-3">
            {/* Add your gallery items here */}
            
        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
          <img src={b6}  alt="gallery" className="img-fluid" />
          </figure>
        </div>
        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
          <img src={g2}   alt="gallery" className="img-fluid"/>
          </figure>
        </div>
        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img src={b1} alt="gallery" className="img-fluid"/>
          </figure>
        </div>
        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img src={b2} alt="gallery" className="img-fluid"/>
          </figure>
        </div>
        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img src={g2} alt="gallery" className="img-fluid"/>
          </figure>
        </div>
        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img src={g7} alt="gallery" className="img-fluid"/>
          </figure>
        </div>
        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img src={e2} alt="gallery" className="img-fluid"/>
          </figure>
        </div>
        <div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img src={e4} alt="gallery" className="img-fluid"/>
          </figure>
        </div><div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img src={g4} alt="gallery" className="img-fluid"/>
          </figure>
        </div><div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img src={g8} alt="gallery" className="img-fluid"/>
          </figure>
        </div><div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img src={g9} alt="gallery" className="img-fluid"/>
          </figure>
        </div><div className="col-md-4 col-10 col-xxl-4 mx-auto">
          <figure>
            <img src={b3} alt="gallery" className="img-fluid"/>
          </figure>
        </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="education">
        <div className="container">
          <div className="row">
            <h2 className="sectionTitle">Education</h2>
            <div className="educationContainer">
              <h3>
                Education Is Essential for<br />
                <strong>Better Future</strong>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt in cupiditate inventore soluta natus excepturi, omnis numquam sit ducimus suscipit maiores! Fugit sint dicta numquam animi amet vitae blanditiis.
              </p>
              <button>Explore Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section className="main_heading join offer_style">
        <div className="container-fluid">
          <div className="row">
            <section className="join" id="joinSection">
              <div className="container">
                <div className="joinTitle">
                  ADOPT A CHILD &amp; <span>SAVE LIVES</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro maiores vitae quae iure nisi inventore <br /> exercitationem id, nesciunt obcaecati sed voluptatibus
                </p>
                <button className="joinNow">
                  <a href="contact.html">CONTACT US</a>
                </button>
                <button className="adoptBtn">ADOPT A CHILD</button>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contents;
