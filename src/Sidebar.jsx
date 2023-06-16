import React from "react";

const Aside = () => {
    return (
        <section>
            <article>
                <h2>Simon Doe</h2>
                <figure>here image</figure>
                <p>
                    Hi, my name is Simon Doe and I'm a senior software engineer.
                    Welcome to my personal website!
                </p>
                {/* Iconos */}
                <ul>
                    <li>
                        <a href="#">Twitter</a>
                    </li>
                    <li>
                        <a href="#">Linkedin</a>
                    </li>
                    <li>
                        <a href="#">GitHub</a>
                    </li>
                    <li>
                        <a href="#">Icono</a>
                    </li>
                    <li>
                        <a href="#">Icono</a>
                    </li>
                </ul>
            </article>
            <article>
                <ul>
                    <li>
                        <a href="#">About Me</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Sevices & Pricing</a>
                    </li>
                    <li>
                        <a href="#">Resume</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        More Pages
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
                    </li>
                </ul>
            </article>
            <article>
                <button>
                    <a href="#">
                        <li>Hire Me</li>
                    </a>
                </button>
                <br />
                <li>
                    Dark Mode <br />
                    <input type="checkbox" />
                </li>
            </article>
        </section>
    );
};

export default Aside;
