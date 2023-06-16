import React from "react";
import "./components/css/normalize.css";
import "./components/css/style.css";
import profileImg from "./components/img/profile.png";
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
            </article>
            <article>
                <ul className="anclas">
                    <li className="anclas__links">
                        <FaUser className="anclas__icon" />
                        <a className="anclas__icons" href="#">
                            About Me
                        </a>
                    </li>
                    <li className="anclas__links">
                        <FaLaptopCode className="anclas__icon" />
                        <a className="anclas__icons" href="#">
                            Portfolio
                        </a>
                    </li>
                    <li className="anclas__links">
                        <FaToolbox className="anclas__icon" />
                        <a className="anclas__icons" href="#">
                            Sevices & Pricing
                        </a>
                    </li>
                    <li className="anclas__links">
                        <FaFileAlt className="anclas__icon" />
                        <a className="anclas__icons" href="#">
                            Resume
                        </a>
                    </li>
                    <li className="anclas__links">
                        <FaBlog className="anclas__icon" />
                        <a className="anclas__icons" href="#">
                            Blog
                        </a>
                    </li>
                    <li className="anclas__links">
                        <FaEnvelopeOpenText className="anclas__icon" />
                        <a className="anclas__icons" href="#">
                            Contact
                        </a>
                    </li>
                    <div>
                        <details className="info-extra">
                            <summary>
                                <FaCog className="anclas__icons" /> More Pages{" "}
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
                <button className="btn">
                    <a href="#">
                        <FaPaperPlane className="icon-paperplane" /> Hire Me
                    </a>
                </button>
                <div className="darkmode">
                    <FaAdjust className="anclas__icons icon-darkmode" /> Dark
                    Mode
                </div>
                <input type="checkbox" />
            </article>
        </section>
    );
};

export default Aside;
