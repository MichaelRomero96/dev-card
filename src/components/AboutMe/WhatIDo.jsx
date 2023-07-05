import './Cards.css';
import '../css/normalize.css';
import TechnologiesCards from './TechnologiesCards';
import { FaArrowAltCircleRight, FaFileAlt } from 'react-icons/fa';

const WhatIDo = () => {
  return (
    <section className="Cards-main">
      <article className="Cards__container">
        <h2 className="title__cards">What I Do</h2>
        <div>
          <p className="intro">
            I have more than 10 years' experience building software for clients
            all over the world. Below is a quick overview of my main technical
            skill sets and technologies I use. Want to find out more about my
            experience? Check out my
            <a href=""> Online Resume</a> and <a href=""> proyect portafolio</a>
          </p>
        </div>
        <article className="Cards__items">
          <div className="items">
            <TechnologiesCards />
          </div>
        </article>
        <div className="content__button">
          <button className="button">
            <a className="button__enlace" href="">
              <FaArrowAltCircleRight className="icon_cards" />
              Services & Pricing
            </a>
          </button>
        </div>
      </article>
    </section>
  );
};

export default WhatIDo;
