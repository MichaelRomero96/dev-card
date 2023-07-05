import React from 'react';
import './StyleHeader.css';
import '../css/normalize.css';
import headerProfile from '../mock/profile-lg.jpg';
import { FaArrowAltCircleRight, FaFileAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <section className="headerabout-him">
        <article className="headerdescription">
          <h2 className="description__title">Simon Doe</h2>
          <h3 className="profesion"> Senior Sofware Engineer</h3>
          <div>
            <p className="informacion">
              I'm a software engineer specialised in frontend and backend
              development for complex scalable web apps. I write about software
              development on
              <a href=""> my blog</a> . Want to know how I may help your
              project? Check out my project
              <a href=""> portafolio </a> and <a href=""> online resume </a>
            </p>
          </div>
          <div className="enlaces">
            <button>
              {' '}
              <a className="enlaces_header1" href="">
                <FaArrowAltCircleRight className="icon" /> view portafolio
              </a>
            </button>

            <button>
              <a className="enlaces_header2" href="">
                {' '}
                <FaFileAlt className="icon" />
                view resume{' '}
              </a>
            </button>
          </div>
        </article>
        <div className="imagen">
          <img className="profile-image" src={headerProfile} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
