import { Link } from 'react-router-dom';
import {
  FaCodeBranch,
  FaEnvelopeSquare,
  FaFilePdf,
  FaGithub,
  FaGlobe,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaPhoneSquare,
  FaTwitter,
} from 'react-icons/fa';
import resumeImg from '../../../public/img/profileSidebarNico.png';
import db from '../../db';
import Styled from './Styled';
import RedesIconWrapper from './RedesIconWrapper';
import cvNico from '../../../public/assets/cv.pdf';

const Resume = () => {
  const { resume, home } = db;
  return (
    <Styled.Container>
      <section>
        <Styled.WrapperHeader>
          <Styled.HeaderTitle>Online Resume</Styled.HeaderTitle>

          <Styled.Button>
            <a
              style={{ color: '#fff', fontSize: '1rem' }}
              href={cvNico}
              download
              className="btn-header__cta"
            >
              <RedesIconWrapper hideBg>
                <FaFilePdf />
              </RedesIconWrapper>
              Download PDF Version
            </a>
          </Styled.Button>
        </Styled.WrapperHeader>

        <Styled.WrapperUser className="wrapper-user">
          <div>
            <Styled.UserTitle>{home.user.name}</Styled.UserTitle>
            <Styled.UserProfession>
              {home.user.profession}
            </Styled.UserProfession>
          </div>

          <ul>
            <li>
              <FaPhoneSquare />
              <Styled.ContactLinks href="https://api.whatsapp.com/send?phone=+573227669542&text=Hello%20Nicolas">
                {resume.contact.number}
              </Styled.ContactLinks>
            </li>
            <li>
              <FaEnvelopeSquare />
              <Styled.ContactLinks href="mailto:nicogarzon131@gmail.com">
                {resume.contact.email}
              </Styled.ContactLinks>
            </li>
            <li>
              <FaGlobe />
              <Styled.ContactLinks href="#">
                {resume.contact.web}
              </Styled.ContactLinks>
            </li>
            <li style={{ fontSize: '12px' }}>
              <FaMapMarkedAlt
                style={{ verticalAlign: 'middle', color: '#4f4f4f' }}
              />
              <Styled.ContactLocation>
                {resume.contact.location}
              </Styled.ContactLocation>
            </li>
          </ul>
        </Styled.WrapperUser>

        <Styled.WrapperProfile>
          <Styled.ProfileImg src={resumeImg} alt="Imagen Resumen" />

          <Styled.ProfileDescription>
            I'm a Junior Web Developer with experience in HTML, CSS, and
            JavaScript, as well as the React framework and TypeScript, I am
            capable of creating dynamic and functional web applications.
            Additionally, I have skills in using libraries such as TailwindCSS
            and Styled Components to design modern and attractive interfaces. My
            focus is on creating clean and modular code, along with a solid
            understanding of best practices in web development. I am excited to
            continue learning and growing in the field of web programming, and I
            am ready to bring my passion and knowledge to a dynamic and
            success-oriented team.
            {/* <Styled.DescriptionLink href="#">
              You can make a PDF version of your resume using our free Sketch
              template here
            </Styled.DescriptionLink> */}
            {/* I have experience working on projects with React, Styled Components,
            Tailwind CSS. I’m a self-sufficient person. I love working on
            eye-catching user interfaces and I would like to venture more into
            mobile development */}
          </Styled.ProfileDescription>
        </Styled.WrapperProfile>
      </section>

      <Styled.SectionArticle>
        <Styled.Flex>
          <div>
            <Styled.Article className="main">
              <Styled.MainTitles>
                <Styled.SpanMainTitles></Styled.SpanMainTitles>Work Experiences
              </Styled.MainTitles>

              <div>
                <Styled.WrapperTexts>
                  <Styled.TextSubtitle>
                    {home.user.profession}
                  </Styled.TextSubtitle>
                  <Styled.TextCompany>
                    {resume.workExperiences.companyAndDate}
                  </Styled.TextCompany>
                </Styled.WrapperTexts>
                <p>{resume.workExperiences.name}</p>
                <Styled.TextRole>{resume.workExperiences.role}</Styled.TextRole>

                <Styled.List>
                  <Styled.ListText>
                    I gained technical experience.
                  </Styled.ListText>
                  <Styled.ListText>
                    Fundamental teamwork skills.
                  </Styled.ListText>
                  <Styled.ListText>Effective communication.</Styled.ListText>
                </Styled.List>
              </div>
            </Styled.Article>
            <Styled.SectionProject>
              <Styled.MainTitles style={{ marginTop: '3rem' }}>
                <Styled.SpanMainTitles></Styled.SpanMainTitles>Projects
              </Styled.MainTitles>

              <div>
                <Styled.WrapperTexts>
                  <Styled.TextSubtitle>
                    {resume.projects.name}{' '}
                    <a href="https://github.com/Niico4/Constructora">
                      <FaGithub
                        style={{
                          width: '18px',
                          height: '18px',
                          verticalAlign: 'middle',
                          color: '#4f4f4f',
                          marginLeft: '1rem',
                        }}
                      />
                    </a>
                  </Styled.TextSubtitle>
                  <Styled.TextCompany>
                    {resume.projects.status}{' '}
                  </Styled.TextCompany>
                </Styled.WrapperTexts>
                <Styled.TextRole>{resume.projects.desription} </Styled.TextRole>
              </div>

              <div>
                <Styled.WrapperTexts>
                  <Styled.TextSubtitle>
                    {resume.projects2.name}
                    <a href="https://github.com/MichaelRomero96/dev-card">
                      <FaGithub
                        style={{
                          width: '18px',
                          height: '18px',
                          verticalAlign: 'middle',
                          color: '#4f4f4f',
                          marginLeft: '1rem',
                        }}
                      />
                    </a>
                  </Styled.TextSubtitle>
                  <Styled.TextCompany>
                    {resume.projects2.status}
                  </Styled.TextCompany>
                </Styled.WrapperTexts>
                <Styled.TextRole>{resume.projects2.desription}</Styled.TextRole>
              </div>
            </Styled.SectionProject>
          </div>

          <Styled.Aside>
            <Styled.Article>
              <Styled.MainTitles>
                <Styled.SpanMainTitles></Styled.SpanMainTitles>Skills
              </Styled.MainTitles>

              <div>
                <Styled.TextSubtitle>Technical</Styled.TextSubtitle>
                <ul>
                  <Styled.ListElementsAside>
                    HTML - CSS - TailwindCSS
                  </Styled.ListElementsAside>
                  <Styled.ListElementsAside>
                    Material UI - Styled Components
                  </Styled.ListElementsAside>
                  <Styled.ListElementsAside>
                    JavaScript - React - TypeScript
                  </Styled.ListElementsAside>
                  <Styled.ListElementsAside>Firebase</Styled.ListElementsAside>
                  <Styled.ListElementsAside>
                    Git - AirTable
                  </Styled.ListElementsAside>
                </ul>
              </div>

              <div>
                <Styled.TextSubtitle>Professional</Styled.TextSubtitle>
                <ul>
                  <Styled.ListElementsAside>
                    Effective communication
                  </Styled.ListElementsAside>
                  <Styled.ListElementsAside>
                    Team player
                  </Styled.ListElementsAside>
                  <Styled.ListElementsAside>
                    Strong problem solver
                  </Styled.ListElementsAside>
                  <Styled.ListElementsAside>
                    Good time management
                  </Styled.ListElementsAside>
                </ul>
              </div>
            </Styled.Article>
            <Styled.Article>
              <Styled.MainTitles>
                <Styled.SpanMainTitles></Styled.SpanMainTitles>Education
              </Styled.MainTitles>

              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ marginBottom: '0.5rem' }}>
                  {resume.education.carrer}
                </p>
                <Styled.TextEducation>
                  {resume.education.school}
                </Styled.TextEducation>
                <Styled.TextEducation>
                  {resume.education.date}
                </Styled.TextEducation>
              </div>
            </Styled.Article>
            <Styled.Article>
              <Styled.MainTitles>
                <Styled.SpanMainTitles></Styled.SpanMainTitles>Certifications
              </Styled.MainTitles>

              <div>
                <p>{resume.certifications.name}</p>
                <Styled.TextAwards style={{ marginTop: '1rem' }}>
                  <ul>
                    <a
                      style={{ color: '#1363df' }}
                      href="https://www.udemy.com/certificate/UC-0d2c70fe-ce8b-4a65-800c-89c6e62b97fc/"
                    >
                      <li style={{ marginBottom: '1rem' }}>
                        {resume.certifications.typeScript}
                      </li>
                    </a>
                    <a
                      style={{ color: '#1363df' }}
                      href="https://www.udemy.com/certificate/UC-b85f45c6-9e85-49ab-a2d7-ac8ca20ba6b4/"
                    >
                      <li style={{ marginBottom: '1rem' }}>
                        {resume.certifications.html}
                      </li>
                    </a>
                    <a
                      style={{ color: '#1363df' }}
                      href="https://www.udemy.com/certificate/UC-caa20bb8-b619-4753-96cf-89b04c307808/"
                    >
                      <li>{resume.certifications.css}</li>
                    </a>
                  </ul>
                </Styled.TextAwards>
              </div>
            </Styled.Article>
            <Styled.Article>
              <Styled.MainTitles>
                <Styled.SpanMainTitles></Styled.SpanMainTitles>Languajes
              </Styled.MainTitles>

              <ul>
                <Styled.ListElementsAside>
                  Spanish (Native)
                </Styled.ListElementsAside>
                <Styled.ListElementsAside style={{ marginBottom: '2rem' }}>
                  English (Basic)
                </Styled.ListElementsAside>
              </ul>
            </Styled.Article>
            <Styled.Article>
              <Styled.MainTitles>
                <Styled.SpanMainTitles></Styled.SpanMainTitles>Interests
              </Styled.MainTitles>

              <ul>
                <Styled.ListElementsAside>Gaming</Styled.ListElementsAside>
                <Styled.ListElementsAside>Technology</Styled.ListElementsAside>
                <Styled.ListElementsAside style={{ marginBottom: '2rem' }}>
                  Travelling
                </Styled.ListElementsAside>
              </ul>
            </Styled.Article>
          </Styled.Aside>
        </Styled.Flex>

        <Styled.HrResume />

        <Styled.Redes>
          <li>
            <RedesIconWrapper>
              <a href="https://github.com/Niico4/">
                <RedesIconWrapper>
                  <FaGithub />
                </RedesIconWrapper>
                <Styled.RedesText>gitgub.com/Niico4</Styled.RedesText>
              </a>
            </RedesIconWrapper>
          </li>
          <li>
            <RedesIconWrapper>
              <a href="https://www.linkedin.com/in/nicolasgarzon131/">
                <RedesIconWrapper>
                  <FaLinkedinIn />
                </RedesIconWrapper>
                <Styled.RedesText>
                  linkedin.com/in/nicolasgarzon131
                </Styled.RedesText>
              </a>
            </RedesIconWrapper>
          </li>
          <li>
            <RedesIconWrapper>
              <a href="https://twitter.com/Niico4_">
                <RedesIconWrapper>
                  <FaTwitter />
                </RedesIconWrapper>
                <Styled.RedesText>@Niico4_</Styled.RedesText>
              </a>
            </RedesIconWrapper>
          </li>
        </Styled.Redes>
      </Styled.SectionArticle>
      <Styled.Footer>
        <Styled.TextFooter>
          Dev card v 1.0{' '}
          <RedesIconWrapper>
            <a href="https://github.com/MichaelRomero96/dev-card">
              <FaGithub style={{ cursor: 'pointer', marginLeft: '10px' }} />
            </a>
          </RedesIconWrapper>
        </Styled.TextFooter>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Resume;
