import React from "react";
import { Link } from "react-router-dom";
import {
    FaEnvelopeSquare,
    FaFilePdf,
    FaGithub,
    FaGlobe,
    FaLinkedinIn,
    FaMapMarkedAlt,
    FaPhoneSquare,
    FaTwitter,
} from "react-icons/fa";
import resumeImg from "./components/mock/resume-profile.png";
import db from "./db";
import "./components/css/resume.css";

const Resume = () => {
    const { resume, home } = db;
    return (
        <>
            <div className="container">
                <section className="header">
                    <div className="wrapper-btn">
                        <h2 className="header__title-resume">Online Resume</h2>

                        <button className="btn-header">
                            <FaFilePdf className="btn-header__icon" />
                            <Link
                                to="https://themes.3rdwavemedia.com/resources/sketch-template/devresume-sketch-sketch-resume-template-for-software-developers/"
                                className="btn-header__cta"
                            >
                                Download PDF Version
                            </Link>
                        </button>
                    </div>

                    <div className="wrapper-user">
                        <div>
                            <h2 className="user__title">{home.user.name}</h2>
                            <p className="user__profession">
                                {home.user.profession}
                            </p>
                        </div>

                        <ul className="wrapper-contact">
                            <li>
                                <FaPhoneSquare />
                                <a className="wrapper-contact__links" href="#">
                                    {resume.contact.number}
                                </a>
                            </li>
                            <li>
                                <FaEnvelopeSquare />
                                <a className="wrapper-contact__links" href="#">
                                    {resume.contact.email}
                                </a>
                            </li>
                            <li>
                                <FaGlobe />
                                <a className="wrapper-contact__links" href="#">
                                    {resume.contact.web}
                                </a>
                            </li>
                            <li className="location">
                                <FaMapMarkedAlt />
                                <p className="wrapper-contact__location">
                                    {resume.contact.location}
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="wrapper-profile">
                        <img
                            src={resumeImg}
                            alt="Imagen Resumen"
                            className="profile__img"
                        />

                        <p className="profile__description">
                            Summarise your career here.
                            <a href="#" className="profile__cta">
                                You can make a PDF version of your resume using
                                our free Sketch template here
                            </a>
                            . Donec quam felis, ultricies nec, pellentesque eu.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Maecenas nec odio et ante tincidunt
                            tempus. Donec vitae sapien ut libero venenatis
                            faucibus. Nullam quis ante. Etiam sit amet orci eget
                            eros faucibus tincidunt. Duis leo. Sed fringilla
                            mauris sit amet nibh.
                        </p>
                    </div>
                </section>

                <section className="section-content">
                    <div className="flex">
                        <div>
                            <article className="main">
                                <h3 className="main__titles">
                                    <span></span>Work Experiences
                                </h3>

                                <div className="main__texts">
                                    <div className="wrapper-texts">
                                        <h4 className="texts__title">
                                            {home.user.profession}
                                        </h4>
                                        <p className="texts__company">
                                            {
                                                resume.workExperiences
                                                    .companyAndDate
                                            }
                                        </p>
                                    </div>
                                    <p className="texts__name">
                                        {resume.workExperiences.name}
                                    </p>
                                    <p className="texts__role">
                                        {resume.workExperiences.role}
                                    </p>

                                    <ul className="list">
                                        <li className="list__text">
                                            Lorem ipsum dolor sit amet,
                                            consectetuer.
                                        </li>
                                        <li className="list__text">
                                            Aenean commodo ligula eget dolor.
                                        </li>
                                        <li className="list__text">
                                            Etiam ultricies nisi vel augue.
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="wrapper-texts">
                                        <h4 className="texts__title">
                                            {resume.workExperiences2.name}
                                        </h4>
                                        <p className="texts__company">
                                            {
                                                resume.workExperiences2
                                                    .companyAndDate
                                            }
                                        </p>
                                    </div>
                                    <p className="texts__name">
                                        {resume.workExperiences2.name}
                                    </p>
                                    <p className="texts__role">
                                        {resume.workExperiences2.role}
                                    </p>

                                    <ul className="list">
                                        <li className="list__text">
                                            Lorem ipsum dolor sit amet,
                                            consectetuer.
                                        </li>
                                        <li className="list__text">
                                            Aenean commodo ligula eget dolor.
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="wrapper-texts">
                                        <h4 className="texts__title">
                                            {resume.workExperiences3.name}
                                        </h4>
                                        <p className="texts__company">
                                            {
                                                resume.workExperiences3
                                                    .companyAndDate
                                            }
                                        </p>
                                    </div>
                                    <p className="texts__name">
                                        {resume.workExperiences3.name}
                                    </p>
                                    <p className="texts__role">
                                        {resume.workExperiences3.role}
                                    </p>
                                </div>

                                <div>
                                    <div className="wrapper-texts">
                                        <h4 className="texts__title">
                                            {resume.workExperiences4.name}
                                        </h4>
                                        <p className="texts__company">
                                            {
                                                resume.workExperiences4
                                                    .companyAndDate
                                            }
                                        </p>
                                    </div>
                                    <p className="texts__name">
                                        {resume.workExperiences4.name}
                                    </p>
                                    <p className="texts__role">
                                        {resume.workExperiences4.role}
                                    </p>
                                </div>

                                <div>
                                    <div className="wrapper-texts">
                                        <h4 className="texts__title">
                                            {resume.workExperiences5.name}
                                        </h4>
                                        <p className="texts__company">
                                            {
                                                resume.workExperiences5
                                                    .companyAndDate
                                            }
                                        </p>
                                    </div>
                                    <p className="texts__name">
                                        {resume.workExperiences5.name}
                                    </p>
                                    <p className="texts__role">
                                        {resume.workExperiences5.role}
                                    </p>
                                </div>

                                <div>
                                    <div className="wrapper-texts">
                                        <h4 className="texts__title">
                                            {resume.workExperiences6.name}
                                        </h4>
                                        <p className="texts__company">
                                            {
                                                resume.workExperiences6
                                                    .companyAndDate
                                            }
                                        </p>
                                    </div>
                                    <p className="texts__name">
                                        {resume.workExperiences6.name}
                                    </p>
                                    <p className="texts__role">
                                        {resume.workExperiences6.role}
                                    </p>
                                </div>
                            </article>
                            <article className="projects">
                                <h3 className="main__titles">
                                    <span></span>Projects
                                </h3>

                                <div>
                                    <div className="wrapper-texts">
                                        <h4 className="texts__title">
                                            {resume.projects.name}
                                        </h4>
                                        <p className="texts__company">
                                            {resume.projects.status}
                                        </p>
                                    </div>
                                    <p className="texts__role">
                                        {resume.projects.desription}
                                    </p>
                                </div>

                                <div>
                                    <div className="wrapper-texts">
                                        <h4 className="texts__title">
                                            {resume.projects2.name}
                                        </h4>
                                        <p className="texts__company">
                                            {resume.projects2.status}
                                        </p>
                                    </div>
                                    <p className="texts__role">
                                        {resume.projects2.desription}
                                    </p>
                                </div>

                                <div>
                                    <div className="wrapper-texts">
                                        <h4 className="texts__title">
                                            {resume.projects3.name}
                                        </h4>
                                        <p className="texts__company">
                                            {resume.projects3.status}
                                        </p>
                                    </div>
                                    <p className="texts__role">
                                        {resume.projects3.desription}
                                    </p>
                                </div>
                            </article>
                        </div>

                        <aside className="aside">
                            <article className="article one">
                                <h3 className="main__titles">
                                    <span></span>Skills
                                </h3>

                                <div>
                                    <h4 className="texts__title">Technical</h4>
                                    <ul>
                                        <li className="list-elements">
                                            JavaScript/Angular/React/Vue
                                        </li>
                                        <li className="list-elements">
                                            Python/ Ruby / PHP
                                        </li>
                                        <li className="list-elements">
                                            Node.js / ASP.NET
                                        </li>
                                        <li className="list-elements">
                                            PostgreSQL / MySQL
                                        </li>
                                        <li className="list-elements">
                                            Object - oriented design
                                        </li>
                                        <li className="list-elements">
                                            Design and implement database
                                            structures
                                        </li>
                                        <li className="list-elements">
                                            Lead and deliver complex software
                                            systems
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="texts__title">
                                        <span></span>Professional
                                    </h4>
                                    <ul>
                                        <li className="list-elements">
                                            Effective communication
                                        </li>
                                        <li className="list-elements">
                                            Team player
                                        </li>
                                        <li className="list-elements">
                                            Strong problem solver
                                        </li>
                                        <li className="list-elements">
                                            Good time management
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            <article className="article two">
                                <h3 className="main__titles">
                                    <span></span>Education
                                </h3>

                                <div className="education">
                                    <p className="title__education">
                                        {resume.education.carrer}
                                    </p>
                                    <p className="text__education">
                                        {resume.education.school}
                                    </p>
                                    <p className="text__education">
                                        {resume.education.date}
                                    </p>
                                </div>

                                <div className="education">
                                    <p className="title__education">
                                        {resume.education2.carrer}
                                    </p>
                                    <p className="text__education">
                                        {resume.education2.school}
                                    </p>
                                    <p className="text__education">
                                        {resume.education2.date}
                                    </p>
                                </div>
                            </article>
                            <article className="article three">
                                <h3 className="main__titles">
                                    <span></span>Awards
                                </h3>

                                <div>
                                    <p>{resume.awards.name}</p>
                                    <p className="text__awards">
                                        {resume.awards.awardAndDate}
                                    </p>
                                </div>

                                <div>
                                    <p>{resume.awards2.name}</p>
                                    <p className="text__awards">
                                        {resume.awards2.awardAndDate}
                                    </p>
                                </div>
                            </article>
                            <article className="article four">
                                <h3 className="main__titles">
                                    <span></span>Languajes
                                </h3>

                                <ul>
                                    <li className="list-elements">
                                        English (Native)
                                    </li>
                                    <li className="list-elements text__lang">
                                        Spanish (Professional)
                                    </li>
                                </ul>
                            </article>
                            <article className="article five">
                                <h3 className="main__titles">
                                    <span></span>Interests
                                </h3>

                                <ul>
                                    <li className="list-elements">Climbing</li>
                                    <li className="list-elements">
                                        Snowboarding
                                    </li>
                                    <li className="list-elements">
                                        Photography
                                    </li>
                                    <li className="list-elements text__lang">
                                        Travelling
                                    </li>
                                </ul>
                            </article>
                        </aside>
                    </div>

                    <hr className="hr-resume" />

                    <ul className="redes-resume">
                        <li>
                            <a href="#" className="red-resume">
                                <FaGithub />
                                <p>gitgub.com/username</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="red-resume">
                                <FaLinkedinIn />
                                <p>linkedin.com/in/username</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="red-resume">
                                <FaTwitter />
                                <p>x@twittername</p>
                            </a>
                        </li>
                    </ul>
                </section>
                <footer className="footer">
                    <p className="derechos">
                        Template Copyright © <a href="#">3rd Wave Media</a>
                    </p>
                </footer>
            </div>
        </>
    );
};

export default Resume;
