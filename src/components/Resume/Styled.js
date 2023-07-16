import styled from 'styled-components';
import theme from '../../theme';
const { colors, breakpoints, fontSize, size } = theme;

//* Wrappers

const Container = styled.div`
  width: 50%;
  margin-left: 600px;
  color: ${colors.fonts.text.normal};

  @media (${breakpoints.mmdDown}) {
    width: 95%;
    margin: 0 ${size.px.md} ${size.px.lg};
    padding: ${size.px.lg};
  }

  @media (${breakpoints.smDown}) {
    display: flex;
    flex-direction: column;
  }

  @media (${breakpoints.lgUp}) {
    margin-left: 400px;
  }

  @media (${breakpoints.lgUp}) {
    width: 60%;
    margin-left: 350px;
  }

  @media (${breakpoints.xlUp}) {
    margin-left: 400px;
  }

  @media (${breakpoints.xxlUp}) {
    width: 50%;
    margin-left: 600px;
  }
`;

const WrapperHeader = styled.div`
  margin: 2rem;
  text-align: center;
  margin-bottom: 8rem;

  @media (${breakpoints.smDown}) {
    margin: 0;
  }
`;

const WrapperUser = styled.div`
  display: flex;
  justify-content: space-between;

  @media (${breakpoints.mmdDown}) {
    align-items: center;
  }

  @media (${breakpoints.smDown}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const WrapperProfile = styled.div`
  display: flex;
  margin-bottom: 4rem;

  @media (${breakpoints.lgDown}) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  @media (${breakpoints.smDown}) {
    margin-top: 2rem;
    flex-direction: column;
  }
`;

const WrapperTexts = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.fonts.text.light};

  @media (${breakpoints.smDown}) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const Redes = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
`;
const List = styled.ul`
  margin-bottom: 1rem;
`;

const Footer = styled.footer`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media (${breakpoints.mmdDown}) {
    height: 0;
    margin-top: 5rem;
  }
`;

//* Titles

const UserTitle = styled.h2`
  font-size: ${fontSize.title_1};
  color: ${colors.fonts.title.normal};
  text-transform: uppercase;
  letter-spacing: ${size.px.xs};
  margin-bottom: 0.2rem;

  @media (${breakpoints.mmdDown}) {
    width: 50%;
  }
`;

const HeaderTitle = styled.h2`
  font-size: ${fontSize.title_2};
  margin-bottom: 1rem;
`;

const MainTitles = styled.h3`
  color: ${colors.fonts.title.normal};
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  font-size: ${fontSize.subtitle};
`;

const SpanMainTitles = styled.span`
  border-left: ${size.px.xs} solid ${colors.fonts.title.normal};
  margin-right: 0.8rem;
`;

//* Subtitles

const UserProfession = styled.p`
  font-size: ${fontSize.subtitle};
  margin-bottom: 5rem;
  color: ${colors.fonts.text.normal};

  @media (${breakpoints.smDown}) {
    margin-bottom: 1rem;
  }
`;

const TextSubtitle = styled.h4`
  color: ${colors.fonts.text.darkest};
  margin-bottom: 1rem;
`;

//* Texts

const ProfileDescription = styled.p`
  line-height: 1.5;
  font-size: ${fontSize.sm};
  text-align: justify;
  color: ${colors.fonts.text.normal};
`;

const TextCompany = styled.p`
  font-size: ${fontSize.xs};
`;

const TextAwards = styled.p`
  color: ${colors.fonts.text.light};
  font-size: ${fontSize.xs};
  margin-bottom: 1rem;
`;

const TextRole = styled.p`
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: ${fontSize.xs};
`;

const TextEducation = styled.p`
  color: ${colors.fonts.text.light};
  font-size: ${fontSize.xs};
`;

const RedesText = styled.p`
  display: inline-block;
  color: ${colors.fonts.text.light};
  font-size: ${fontSize.xs};
`;

const TextFooter = styled.p`
  text-align: center;
  font-size: ${fontSize.sm};

  @media (${breakpoints.mmdDown}) {
    line-height: 0;
    padding-top: ${size.xs};
    padding-bottom: ${size.xs};
  }
`;

const ListText = styled.li`
  list-style: outside;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  font-size: ${fontSize.xs};
`;
const ContactLocation = styled.p`
  display: inline-block;
  color: ${colors.fonts.text.normal};
  margin-left: 0.5rem;
`;

//* Sections

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (${breakpoints.mmdDown}) {
    width: 100%;
  }
`;

const ListElementsAside = styled.li`
  margin-bottom: 1rem;
  font-size: ${fontSize.xs};
`;

const Article = styled.article`
  @media (${breakpoints.mmdDown}) {
    margin-bottom: 2.5rem;
  }
`;

const SectionArticle = styled.section`
  margin-bottom: 6.8rem;

  @media (${breakpoints.mmdDown}) {
    margin: 0;
  }
`;

const SectionProject = styled.article`
  margin-bottom: 8rem;

  @media (${breakpoints.lgDown}) {
    margin-bottom: 0;
  }

  @media (${breakpoints.mmdDown}) {
    margin-bottom: 3rem;
  }
`;

//* Links / Buttons

const Button = styled.button`
  all: unset;
  background-color: ${colors.fonts.title.normal};
  padding: 6px ${size.px.sm};
  height: 2rem;
  font-weight: bold;
  border-radius: ${size.px.xs};
  transition: all 0.5s;

  &:hover {
    background-color: ${colors.palette.secondary};
  }

  @media (${breakpoints.smDown}) {
    margin: 0;
    margin-bottom: 8rem;
  }
`;
const ContactLinks = styled.a`
  text-decoration: underline;
  font-size: ${fontSize.xs};
  margin-bottom: ${size.px.sm};
  display: inline-block;
  color: ${colors.fonts.text.normal};
  margin-left: 0.5rem;

  &:hover {
    text-decoration: underline ${colors.fonts.title.normal};
    color: ${colors.fonts.title.normal};
  }
`;

const DescriptionLink = styled.a`
  text-decoration: underline ${colors.fonts.text.light};
  color: ${colors.fonts.text.normal};

  &:hover {
    text-decoration: underline ${colors.fonts.title.normal};
    color: ${colors.fonts.title.normal};
  }
`;

const RedesIcons = styled.li`
  text-align: center;
  line-height: 1.8;
  width: 32px;
  height: 32px;
  background-color: #27b5ff;
  border-radius: 50%;
  padding-top: 5px;

  &:hover {
    background-color: #11a1f1;
  }
`;

//* Images

const ProfileImg = styled.img`
  max-width: 120px;
  min-height: 100%;
  margin-right: 3rem;
  border-radius: 50%;

  @media (${breakpoints.smDown}) {
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`;

//* Tools

const HrResume = styled.hr`
  border-color: ${colors.fonts.text.dark};
  margin: 1rem 0;
`;

const Flex = styled.div`
  display: flex;
  gap: 5rem;

  @media (${breakpoints.lgDown}) {
    flex-direction: column;
    gap: 1rem;
  }

  @media (${breakpoints.mmdDown}) {
    display: unset;
  }
`;

export default {
  Container,
  WrapperHeader,
  HeaderTitle,
  Button,
  WrapperUser,
  UserTitle,
  UserProfession,
  ContactLinks,
  ContactLocation,
  WrapperProfile,
  ProfileImg,
  ProfileDescription,
  DescriptionLink,
  Flex,
  WrapperTexts,
  TextSubtitle,
  TextCompany,
  TextRole,
  List,
  ListText,
  Aside,
  ListElementsAside,
  TextEducation,
  TextAwards,
  HrResume,
  Redes,
  MainTitles,
  SpanMainTitles,
  RedesText,
  SectionProject,
  Article,
  Footer,
  TextFooter,
  SectionArticle,
  RedesIcons,
};
