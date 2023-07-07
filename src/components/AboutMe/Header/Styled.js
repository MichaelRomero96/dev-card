import styled from 'styled-components';
import theme from '../../../theme';
const { colors, breakpoints } = theme;

const Header = styled.header`
  margin: 50px 180px 1rem 480px;

  @media (${breakpoints.lgDown}) {
    margin-left: 295px;
    width: 70%;
  }

  @media (${breakpoints.mdDown}) {
    margin: 0 auto;
    margin-top: 20px;
    width: 90%;
  }
`;

const WrapperContent = styled.section`
  padding: 0px 12px;
  width: 80%;

  @media (${breakpoints.lgDown}) {
    width: 100%;
    padding: 0;
  }
`;

const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 10px;

  @media (${breakpoints.lgDown}) {
    font-size: 38px;
  }

  @media (${breakpoints.mdDown}) {
    margin: 0;
  }

  @media (${breakpoints.xxsDown}) {
    font-size: 36px;
    text-align: center;
  }
`;

const SubTitleProfesion = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
  color: ${colors.fonts.title.normal};

  @media (${breakpoints.mdDown}) {
    margin-top: 1rem;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: ${colors.fonts.text.normal};
  margin-bottom: 3rem;
  margin-right: 2rem;
  line-height: 1.5;
  text-align: justify;

  @media (${breakpoints.lgDown}) {
    margin-right: 0;
  }

  @media (${breakpoints.smDown}) {
    margin-bottom: 1rem;
  }

  @media (${breakpoints.mmdDown}) {
    font-size: 14px;
  }
`;

const ButtonPortfolio = styled.button`
  all: unset;
  margin-right: 16px;
  padding: 10px 16px;
  background-color: ${colors.palette.primary};
  border-radius: 8px;
  font-weight: 700;

  &:hover {
    background-color: ${colors.palette.secondary};
    transition: 0.7s;
  }

  @media (${breakpoints.mmdDown}) {
    font-size: 15px;
  }

  @media (${breakpoints.xsDown}) {
    font-size: 14px;
  }

  @media (${breakpoints.xxsDown}) {
    font-size: 12px;
    margin-right: 12px;
  }
`;

const ButtonResume = styled.button`
  all: unset;
  margin: 0px;
  padding: 10px 16px;
  background-color: ${colors.fonts.text.normal};
  border-radius: 8px;
  font-weight: 700;

  &:hover {
    background-color: rgba(0, 0, 0, 1);
    transition: 0.7s;
  }

  @media (${breakpoints.mmdDown}) {
    font-size: 15px;
  }

  @media (${breakpoints.xxsDown}) {
    font-size: 12px;
  }
`;

const ImgProfile = styled.img`
  height: 300px;
  width: 500px;
  object-fit: cover;

  @media (${breakpoints.lgDown}) {
    height: 350px;
    width: 220px;
    margin-left: 2rem;
  }

  @media (${breakpoints.mmdDown}) {
    height: 300px;
    width: 490px;
  }

  @media (${breakpoints.smDown}) {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin: 0;
    margin-top: 2rem;
  }
`;

//* Tools
const Flex = styled.div`
  display: flex;

  @media (${breakpoints.lgDown}) {
    flex-direction: row;
  }

  @media (${breakpoints.smDown}) {
    flex-direction: column;
  }
`;

const FlexButtons = styled.div`
  @media (${breakpoints.lgDown}) {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }

  @media (${breakpoints.smDown}) {
    display: unset;
  }
`;

export default {
  Header,
  Title,
  SubTitleProfesion,
  Description,
  ButtonPortfolio,
  ButtonResume,
  ImgProfile,
  Flex,
  FlexButtons,
  WrapperContent,
};
