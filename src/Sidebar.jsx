/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./components/css/normalize.css";
import "./components/css/sidebar.css";
import profileImg from "./components/mock/profile.png";
import AboutMe from './AboutMe';
import { Link } from "react-router-dom";
import {
    FaTwitter,
    FaLinkedinIn,
    FaGithubAlt,
    FaCodepen,
    FaStackOverflow,
    FaAdjust,
    FaPaperPlane,
    FaCog,
    FaEnvelopeOpenText,
    FaBlog,
    FaFileAlt,
    FaToolbox,
    FaLaptopCode,
    FaUser,
    FaCaretDown,
} from "react-icons/fa";
import data from "./data";

const Aside = () => {
    return (
        <section className="body">
            <h1 className="header__title">
                <a href="#">{data.sidebar.name}</a>
            </h1>
            <article className="navbar">
                <img className="profile" src={profileImg} alt="Profile" />
                <p className="description">
                   {data.sidebar.description}
                </p>
                <ul className="redes">
                    <li className="redes__icons">
                        <Link to="/twitter">
                            <FaTwitter />
                        </Link>
                    </li>
                    <li className="redes__icons">
                        <Link to="/linkedin">
                            <FaLinkedinIn />
                        </Link>
                    </li>
                    <li className="redes__icons">
                        <Link to="/github">
                            <FaGithubAlt />
                        </Link>
                    </li>
                    <li className="redes__icons">
                        <Link to="overflow">
                            <FaStackOverflow />
                        </Link>
                    </li>
                    <li className="redes__icons">
                        <Link to="codepen">
                            <FaCodepen />
                        </Link>
                    </li>
                </ul>
                <hr />
            </article>
            <article>
                <ul className="anclas">
                    <li className="anclas__links">
                        <Link className="anclas__icons" to="/about-me">
                            <FaUser className="anclas__icon" />
                            About Me
                        </Link>
                    </li>
                    <li className="anclas__links">
                        <Link className="anclas__icons" to="/portfolio">
                            <FaLaptopCode className="anclas__icon" />
                            Portfolio
                        </Link>
                    </li>
                    <li className="anclas__links">
                        <Link className="anclas__icons" to="/sevices">
                            <FaToolbox className="anclas__icon" />
                            Sevices & Pricing
                        </Link>
                    </li>
                    <li className="anclas__links">
                        <Link className="anclas__icons" to="/resume">
                            <FaFileAlt className="anclas__icon" />
                            Resume
                        </Link>
                    </li>
                    <li className="anclas__links">
                        <Link className="anclas__icons" to="/blog">
                            <FaBlog className="anclas__icon" />
                            Blog
                        </Link>
                    </li>
                    <li className="anclas__links">
                        <Link className="anclas__icons" to="/contact">
                            <FaEnvelopeOpenText className="anclas__icon" />
                            Contact
                        </Link>
                    </li>
                    <div>
                        <details className="info-extra">
                            <summary>
                                <FaCog className="anclas__icons" /> More Pages
                                <FaCaretDown className="icon-arrow" />
                            </summary>
                            <ul className="details">
                                <li>
                                    <Link
                                        className="details__info"
                                        to="/project-page"
                                    >
                                        Project Page
                                    </Link>
                                </li>
                                <li>
                                    <Link className="details__info" to="/blog1">
                                        Blog Home 1
                                    </Link>
                                </li>
                                <li>
                                    <Link className="details__info" to="/blog2">
                                        Blog Home 2
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="details__info"
                                        to="/blog-post"
                                    >
                                        Blog Post
                                    </Link>
                                </li>
                            </ul>
                        </details>
                    </div>
                </ul>
            </article>
            <article>
                <div>
                    <button className="btn">
                        <Link to="/hireme">
                            <FaPaperPlane className="icon-paperplane" /> Hire Me
                        </Link>
                    </button>
                </div>
                <hr className="btn-darkmode" />
                <div>
                    <h4 className="darkmode">
                        <FaAdjust className="anclas__icons icon-darkmode" />
                        Dark Mode
                    </h4>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider"></span>
                    </label>
                </div>
            </article>
        </section>
    );
};

export default Aside;
