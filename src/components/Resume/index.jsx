import { Link } from 'react-router-dom';
import {
  FaEnvelopeSquare,
  FaFilePdf,
  FaGithub,
  FaGlobe,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaPhoneSquare,
  FaTwitter,
} from 'react-icons/fa';
import resumeImg from './../mock/resume-profile.png';
import db from '../../db';
import Styled from './Styled';
import RedesIconWrapper from './RedesIconWrapper';

const Resume = () => {
  const { resume, home } = db;
  return (
    <Styled.Container>
      <section>
        <Styled.WrapperHeader>
          <Styled.HeaderTitle>Online Resume</Styled.HeaderTitle>

          <Styled.Button>
            <RedesIconWrapper hideBg>
              <FaFilePdf />
            </RedesIconWrapper>
            <Link
              style={{ color: '#fff', fontSize: '1rem' }}
              to="https://themes.3rdwavemedia.com/resources/sketch-template/devresume-sketch-sketch-resume-template-for-software-developers/"
              className="btn-header__cta"
            >
              Download PDF Version
            </Link>
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
              <Styled.ContactLinks href="#">
                {resume.contact.number}
              </Styled.ContactLinks>
            </li>
            <li>
              <FaEnvelopeSquare />
              <Styled.ContactLinks href="#">
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
            Summarise your career here.
            <Styled.DescriptionLink href="#">
              You can make a PDF version of your resume using our free Sketch
              template here
            </Styled.DescriptionLink>
            . Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum
            dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Maecenas nec odio
            et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
            faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
            tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
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
                    Lorem ipsum dolor sit amet, consectetuer.
                  </Styled.ListText>
                  <Styled.ListText>
                    Aenean commodo ligula eget dolor.
                  </Styled.ListText>
                  <Styled.ListText>
                    Etiam ultricies nisi vel augue.
                  </Styled.ListText>
                </Styled.List>
              </div>

              <div>
                <Styled.WrapperTexts>
                  <Styled.TextSubtitle>
                    {resume.workExperiences2.name}
                  </Styled.TextSubtitle>
                  <Styled.TextCompany>
                    {resume.workExperiences2.companyAndDate}
                  </Styled.TextCompany>
                </Styled.WrapperTexts>
                <p>{resume.workExperiences2.name}</p>
                <Styled.TextRole>
                  {resume.workExperiences2.role}
                </Styled.TextRole>

                <Styled.List>
                  <Styled.ListText>
                    Lorem ipsum dolor sit amet, consectetuer.
                  </Styled.ListText>
                  <Styled.ListText>
                    Aenean commodo ligula eget dolor.
                  </Styled.ListText>
                </Styled.List>
              </div>

              <div>
                <Styled.WrapperTexts>
                  <Styled.TextSubtitle>
                    {resume.workExperiences3.name}
                  </Styled.TextSubtitle>
                  <Styled.TextCompany>
                    {resume.workExperiences3.companyAndDate}
                  </Styled.TextCompany>
                </Styled.WrapperTexts>
                <p>{resume.workExperiences3.name}</p>
                <Styled.TextRole>
                  {resume.workExperiences3.role}
                </Styled.TextRole>
              </div>

              <div>
                <Styled.WrapperTexts>
                  <Styled.TextSubtitle>
                    {resume.workExperiences4.name}
                  </Styled.TextSubtitle>
                  <Styled.TextCompany>
                    {resume.workExperiences4.companyAndDate}
                  </Styled.TextCompany>
                </Styled.WrapperTexts>
                <p>{resume.workExperiences4.name}</p>
                <Styled.TextRole>
                  {resume.workExperiences4.role}
                </Styled.TextRole>
              </div>

              <div>
                <Styled.WrapperTexts>
                  <Styled.TextSubtitle>
                    {resume.workExperiences5.name}
                  </Styled.TextSubtitle>
                  <Styled.TextCompany>
                    {resume.workExperiences5.companyAndDate}
                  </Styled.TextCompany>
                </Styled.WrapperTexts>
                <p>{resume.workExperiences5.name}</p>
                <Styled.TextRole>
                  {resume.workExperiences5.role}
                </Styled.TextRole>
              </div>

              <div>
                <Styled.WrapperTexts>
                  <Styled.TextSubtitle>
                    {resume.workExperiences6.name}
                  </Styled.TextSubtitle>
                  <Styled.TextCompany>
                    {resume.workExperiences6.companyAndDate}
                  </Styled.TextCompany>
                </Styled.WrapperTexts>
                <p>{resume.workExperiences6.name}</p>
                <Styled.TextRole>
                  {resume.workExperiences6.role}
                </Styled.TextRole>
              </div>
            </Styled.Article>
            <Styled.SectionProject>
              <Styled.MainTitles>
                <Styled.SpanMainTitles></Styled.SpanMainTitles>Projects
              </Styled.MainTitles>

              <div>
                <Styled.WrapperTexts>
                  <Styled.TextSubtitle>
                    {resume.projects.name}
                  </Styled.TextSubtitle>
                  <Styled.TextCompany>
                    {resume.projects.status}
                  </Styled.TextCompany>
                </Styled.WrapperTexts>
                <Styled.TextRole>{resume.projects.desription}</Styled.TextRole>
              </div>

              <div>
                <Styled.WrapperTexts>
                  <Styled.TextSubtitle>
                    {resume.projects2.name}
                  </Styled.TextSubtitle>
                  <Styled.TextCompany>
                    {resume.projects2.status}
                  </Styled.TextCompany>
                </Styled.WrapperTexts>
                <Styled.TextRole>{resume.projects2.desription}</Styled.TextRole>
              </div>

              <div>
                <Styled.WrapperTexts>
                  <Styled.TextSubtitle>
                    {resume.projects3.name}
                  </Styled.TextSubtitle>
                  <Styled.TextCompany>
                    {resume.projects3.status}
                  </Styled.TextCompany>
                </Styled.WrapperTexts>
                <Styled.TextRole>{resume.projects3.desription}</Styled.TextRole>
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
                    JavaScript/Angular/React/Vue
                  </Styled.ListElementsAside>
                  <Styled.ListElementsAside>
                    Python/ Ruby / PHP
                  </Styled.ListElementsAside>
                  <Styled.ListElementsAside>
                    Node.js / ASP.NET
                  </Styled.ListElementsAside>
                  <Styled.ListElementsAside>
                    PostgreSQL / MySQL
                  </Styled.ListElementsAside>
                  <Styled.ListElementsAside>
                    Object - oriented design
                  </Styled.ListElementsAside>
                  <Styled.ListElementsAside>
                    Design and implement database structures
                  </Styled.ListElementsAside>
                  <Styled.ListElementsAside>
                    Lead and deliver complex software systems
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

              <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ marginBottom: '0.5rem' }}>
                  {resume.education2.carrer}
                </p>
                <Styled.TextEducation>
                  {resume.education2.school}
                </Styled.TextEducation>
                <Styled.TextEducation>
                  {resume.education2.date}
                </Styled.TextEducation>
              </div>
            </Styled.Article>
            <Styled.Article>
              <Styled.MainTitles>
                <Styled.SpanMainTitles></Styled.SpanMainTitles>Awards
              </Styled.MainTitles>

              <div>
                <p>{resume.awards.name}</p>
                <Styled.TextAwards>
                  {resume.awards.awardAndDate}
                </Styled.TextAwards>
              </div>

              <div>
                <p>{resume.awards2.name}</p>
                <Styled.TextAwards>
                  {resume.awards2.awardAndDate}
                </Styled.TextAwards>
              </div>
            </Styled.Article>
            <Styled.Article>
              <Styled.MainTitles>
                <Styled.SpanMainTitles></Styled.SpanMainTitles>Languajes
              </Styled.MainTitles>

              <ul>
                <Styled.ListElementsAside>
                  English (Native)
                </Styled.ListElementsAside>
                <Styled.ListElementsAside style={{ marginBottom: '2rem' }}>
                  Spanish (Professional)
                </Styled.ListElementsAside>
              </ul>
            </Styled.Article>
            <Styled.Article>
              <Styled.MainTitles>
                <Styled.SpanMainTitles></Styled.SpanMainTitles>Interests
              </Styled.MainTitles>

              <ul>
                <Styled.ListElementsAside>Climbing</Styled.ListElementsAside>
                <Styled.ListElementsAside>
                  Snowboarding
                </Styled.ListElementsAside>
                <Styled.ListElementsAside>Photography</Styled.ListElementsAside>
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
              <a href="#">
                <RedesIconWrapper>
                  <FaGithub />
                </RedesIconWrapper>
                <Styled.RedesText>gitgub.com/username</Styled.RedesText>
              </a>
            </RedesIconWrapper>
          </li>
          <li>
            <RedesIconWrapper>
              <a href="#">
                <RedesIconWrapper>
                  <FaLinkedinIn />
                </RedesIconWrapper>
                <Styled.RedesText>linkedin.com/in/username</Styled.RedesText>
              </a>
            </RedesIconWrapper>
          </li>
          <li>
            <RedesIconWrapper>
              <a href="#">
                <RedesIconWrapper>
                  <FaTwitter />
                </RedesIconWrapper>
                <Styled.RedesText>x@twittername</Styled.RedesText>
              </a>
            </RedesIconWrapper>
          </li>
        </Styled.Redes>
      </Styled.SectionArticle>
      <Styled.Footer>
        <Styled.TextFooter>
          Template Copyright © {''}
          <a
            style={{
              color: '#54B686',
              '&:hover': { textDecoration: 'underline', color: '#43946d' },
            }}
            href="#"
          >
            3rd Wave Media
          </a>
        </Styled.TextFooter>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Resume;
