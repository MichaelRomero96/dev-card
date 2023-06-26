import React, { useEffect, useRef, useState } from 'react';
import '../../css/normalize.css';
import '../../css/sidebar.css';
import { gsap } from 'gsap';
import HamburgerButton from '../../../components/HamburgerIcon';
import profileImg from '../../../components/mock/profile.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithubAlt,
  FaCodepen,
  FaStackOverflow,
  FaAdjust,
  FaPaperPlane,
  FaEnvelopeOpenText,
  FaBlog,
  FaFileAlt,
  FaToolbox,
  FaLaptopCode,
  FaUser,
  FaCaretDown,
  FaInfoCircle,
} from 'react-icons/fa';
import Styled from './Styled';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState();
  const sectionRef = useRef();

  useEffect(() => {
    if (isSidebarOpen === undefined) return;
    const sectionElement = sectionRef.current;
    if (sectionElement) {
      if (isSidebarOpen) {
        gsap.to(sectionElement, {
          maxHeight: window.innerWidth > 900 ? '100vh' : '90vh',
          display: 'block',
        });
      } else {
        gsap.to(sectionElement, {
          maxHeight: 0,
          display: 'none',
        });
      }
    }
  }, [isSidebarOpen, sectionRef]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        setIsSidebarOpen(true);
      }
    });
  });

  const [open, setOpen] = useState(true);

  const location = useLocation();

  return (
    <div>
      <Styled.HeaderWrapper>
        <HamburgerButton action={() => setIsSidebarOpen((prev) => !prev)} />
        <h1 style={{ fontSize: '1.4rem', color: '#fff' }}>Simon Doe</h1>
      </Styled.HeaderWrapper>
      <Styled.Body ref={sectionRef}>
        <Styled.HeaderTitle>Simon Doe</Styled.HeaderTitle>
        <Styled.NavbarWrapper>
          <Styled.ProfileImg src={profileImg} alt="Profile Image" />
          <Styled.Description>
            Hi, my name is Simon Doe and I'm a senior software engineer. Welcome
            to my personal website!
          </Styled.Description>
          <Styled.WrapperRedes>
            <Styled.RedesIcons>
              <Link to="/twitter" style={{ color: '#54b689' }}>
                <FaTwitter />
              </Link>
            </Styled.RedesIcons>
            <Styled.RedesIcons>
              <Link to="/linkedin" style={{ color: '#54b689' }}>
                <FaLinkedinIn />
              </Link>
            </Styled.RedesIcons>
            <Styled.RedesIcons>
              <Link to="/github" style={{ color: '#54b689' }}>
                <FaGithubAlt />
              </Link>
            </Styled.RedesIcons>
            <Styled.RedesIcons>
              <Link to="overflow" style={{ color: '#54b689' }}>
                <FaStackOverflow />
              </Link>
            </Styled.RedesIcons>
            <Styled.RedesIcons>
              <Link to="codepen" style={{ color: '#54b689' }}>
                <FaCodepen />
              </Link>
            </Styled.RedesIcons>
          </Styled.WrapperRedes>
          <Styled.Hr />
        </Styled.NavbarWrapper>
        <article>
          <Styled.AnclasWrapper>
            <Styled.Anclas>
              <Styled.AnclasLink
                className={location.pathname === '/about-me' ? 'active' : ''}
                to="/about-me"
              >
                <FaUser
                  style={{
                    marginRight: '0.5rem',
                    verticalAlign: '-0.125em',
                  }}
                />
                About Me
              </Styled.AnclasLink>
            </Styled.Anclas>
            <Styled.Anclas>
              <Styled.AnclasLink
                className={location.pathname === '/portfolio' ? 'active' : ''}
                to="/portfolio"
              >
                <FaLaptopCode
                  style={{
                    marginRight: '0.5rem',
                    verticalAlign: '-0.125em',
                  }}
                />
                Portfolio
              </Styled.AnclasLink>
            </Styled.Anclas>
            <Styled.Anclas>
              <Styled.AnclasLink
                className={location.pathname === '/sevices' ? 'active' : ''}
                to="/sevices"
              >
                <FaToolbox
                  style={{
                    marginRight: '0.5rem',
                    verticalAlign: '-0.125em',
                  }}
                />
                Sevices & Pricing
              </Styled.AnclasLink>
            </Styled.Anclas>
            <Styled.Anclas>
              <Styled.AnclasLink
                className={location.pathname === '/resume' ? 'active' : ''}
                to="/resume"
              >
                <FaFileAlt
                  style={{
                    marginRight: '0.5rem',
                    verticalAlign: '-0.125em',
                  }}
                />
                Resume
              </Styled.AnclasLink>
            </Styled.Anclas>
            <Styled.Anclas>
              <Styled.AnclasLink
                className={location.pathname === '/blog' ? 'active' : ''}
                to="/blog"
              >
                <FaBlog
                  style={{
                    marginRight: '0.5rem',
                    verticalAlign: '-0.125em',
                  }}
                />
                Blog
              </Styled.AnclasLink>
            </Styled.Anclas>
            <Styled.Anclas>
              <Styled.AnclasLink
                className={location.pathname === '/contact' ? 'active' : ''}
                to="/contact"
              >
                <FaEnvelopeOpenText
                  style={{
                    marginRight: '0.5rem',
                    verticalAlign: '-0.125em',
                  }}
                />
                Contact
              </Styled.AnclasLink>
            </Styled.Anclas>
          </Styled.AnclasWrapper>

          <Styled.AnclaMorePage
            to="/more-pages"
            className={location.pathname === '/more-pages' ? 'active' : ''}
            onClick={() => setOpen(!open)}
          >
            <FaInfoCircle
              style={{ marginRight: '10px', verticalAlign: '-0.125em' }}
            />
            More Pages
            <FaCaretDown />
          </Styled.AnclaMorePage>

          <Styled.WrapperMorePages className={open ? 'list-show' : ''}>
            <Styled.ListMorePages>
              <Styled.ListLinksMorePages href="">
                Project Page
              </Styled.ListLinksMorePages>
            </Styled.ListMorePages>
            <Styled.ListMorePages>
              <Styled.ListLinksMorePages href="">
                Blog Home 1
              </Styled.ListLinksMorePages>
            </Styled.ListMorePages>
            <Styled.ListMorePages>
              <Styled.ListLinksMorePages href="">
                Blog Home 2
              </Styled.ListLinksMorePages>
            </Styled.ListMorePages>
            <Styled.ListMorePages>
              <Styled.ListLinksMorePages href="">
                Blog Home 3
              </Styled.ListLinksMorePages>
            </Styled.ListMorePages>
          </Styled.WrapperMorePages>
        </article>
        <article>
          <div>
            <Styled.Button>
              <Link style={{ color: '#fff', fontSize: '15px' }} to="/hireme">
                <FaPaperPlane
                  style={{
                    marginRight: '0.5rem',
                    verticalAlign: '-0.125em',
                  }}
                />
                Hire Me
              </Link>
            </Styled.Button>
          </div>
          <Styled.Hr style={{ margin: '1rem 0' }} />
          <div>
            <Styled.TitleDarkMode>
              <FaAdjust
                style={{
                  marginRight: '0.5rem',
                  verticalAlign: '-0.125em',
                }}
              />
              Dark Mode
            </Styled.TitleDarkMode>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </div>
        </article>
      </Styled.Body>
    </div>
  );
};

export default Sidebar;
