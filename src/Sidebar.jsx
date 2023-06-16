import React from "react";
import "./components/css/normalize.css";
import "./components/css/sidebar.css";
import profileImg from "./components/mock/profile.png";
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

const Aside = () => {
    return (
        <section className="body">
            <h1 className="header__title">
                <a href="#">Simon Doe</a>
            </h1>
            <article className="navbar">
                <img className="profile" src={profileImg} alt="Profile Image" />
                <p className="description">
                    Hi, my name is Simon Doe and I'm a senior software engineer.
                    Welcome to my personal website!
                </p>
                {/* Iconos */}
                <ul className="redes">
                    <li className="redes__icons">
                        <a href="#">
                            <FaTwitter />
                        </a>
                    </li>
                    <li className="redes__icons">
                        <a href="#">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="redes__icons">
                        <a href="#">
                            <FaGithubAlt />
                        </a>
                    </li>
                    <li className="redes__icons">
                        <a href="#">
                            <FaStackOverflow />
                        </a>
                    </li>
                    <li className="redes__icons">
                        <a href="#">
                            <FaCodepen />
                        </a>
                    </li>
                </ul>
                <hr />
            </article>
            <article>
                <ul className="anclas">
                    <li className="anclas__links">
                        <a className="anclas__icons" href="#">
                            <FaUser className="anclas__icon" />
                            About Me
                        </a>
                    </li>
                    <li className="anclas__links">
                        <a className="anclas__icons" href="#">
                            <FaLaptopCode className="anclas__icon" />
                            Portfolio
                        </a>
                    </li>
                    <li className="anclas__links">
                        <a className="anclas__icons" href="#">
                            <FaToolbox className="anclas__icon" />
                            Sevices & Pricing
                        </a>
                    </li>
                    <li className="anclas__links">
                        <a className="anclas__icons" href="#">
                            <FaFileAlt className="anclas__icon" />
                            Resume
                        </a>
                    </li>
                    <li className="anclas__links">
                        <a className="anclas__icons" href="#">
                            <FaBlog className="anclas__icon" />
                            Blog
                        </a>
                    </li>
                    <li className="anclas__links">
                        <a className="anclas__icons" href="#">
                            <FaEnvelopeOpenText className="anclas__icon" />
                            Contact
                        </a>
                    </li>
                    <div>
                        <details className="info-extra">
                            <summary>
                                <FaCog className="anclas__icons" /> More Pages
                                <FaCaretDown className="icon-arrow" />
                            </summary>
                            <ul className="details">
                                <li>
                                    <a className="details__info" href="#">
                                        Project Page
                                    </a>
                                </li>
                                <li>
                                    <a className="details__info" href="#">
                                        Blog Home 1
                                    </a>
                                </li>
                                <li>
                                    <a className="details__info" href="#">
                                        Blog Home 2
                                    </a>
                                </li>
                                <li>
                                    <a className="details__info" href="#">
                                        Blog Post
                                    </a>
                                </li>
                            </ul>
                        </details>
                    </div>
                </ul>
            </article>
            <article>
                <div>
                    <button className="btn">
                        <a href="#">
                            <FaPaperPlane className="icon-paperplane" /> Hire Me
                        </a>
                    </button>
                </div>
                <hr className="btn-darkmode" />
                <div>
                    <h4 className="darkmode">
                        <FaAdjust className="anclas__icons icon-darkmode" />{" "}
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
