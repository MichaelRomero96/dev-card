import React from "react";
import "./components/css/normalize.css";
import "./components/css/style.css";
import profileImg from './components/img/profile.png';
import {
    FaTwitter,
    FaLinkedin,
    FaGithubAlt,
    FaCodepen,
    FaStackOverflow,
    FaAdjust,
    FaPaperPlane,
    FaCogs,
    FaEnvelopeOpenText,
    FaBlog,
    FaFileAlt,
    FaToolbox,
    FaLaptopCode,
    FaUser,
} from "react-icons/fa";

const Aside = () => {
    return (
        <section className="body">
            <h1 className="header__title">
                <a href="#">
                    Simon Doe
                </a>
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
                            <FaTwitter/>
                        </a>
                    </li>
                    <li className="redes__icons">
                        <a href="#">
                            <FaLinkedin/>
                        </a>
                    </li>
                    <li className="redes__icons">
                        <a href="#">
                            <FaGithubAlt/>
                        </a>
                    </li>
                    <li className="redes__icons">
                        <a href="#">
                            <FaStackOverflow/>
                        </a>
                    </li>
                    <li className="redes__icons">
                        <a href="#">
                            <FaCodepen/>
                        </a>
                    </li>
                </ul>
            </article>
            <article>
                <ul>
                    <li>
                        <FaUser />
                        <a href="#">About Me</a>
                    </li>
                    <li>
                        <FaLaptopCode />
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <FaToolbox />
                        <a href="#">Sevices & Pricing</a>
                    </li>
                    <li>
                        <FaFileAlt />
                        <a href="#">Resume</a>
                    </li>
                    <li>
                        <FaBlog />
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <FaEnvelopeOpenText />
                        <a href="#">Contact</a>
                    </li>
                    <div>
                        <FaCogs /> More Pages
                    </div>
                    <ul>
                        <li>
                            <a href="#">Project Page</a>
                        </li>
                        <li>
                            <a href="#">Blog Home 1</a>
                        </li>
                        <li>
                            <a href="#">Blog Home 2</a>
                        </li>
                        <li>
                            <a href="#">Blog Post</a>
                        </li>
                    </ul>
                </ul>
            </article>
            <article>
                <button>
                    <a href="#">
                        <FaPaperPlane /> Hire Me
                    </a>
                </button>
                <div>
                    <FaAdjust /> Dark Mode
                    <input type="checkbox" />
                </div>
            </article>
        </section>
    );
};

export default Aside;
