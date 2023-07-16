import styled from 'styled-components';
import theme from '../../../theme';
const { colors, breakpoints, fontSize, size } = theme;

const WrapperCards = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (${breakpoints.lgDown}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${breakpoints.smDown}) {
    display: unset;
  }
`;

const Card = styled.div`
  width: 100%;
  margin-bottom: 32px;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 16px;
  color: ${colors.fonts.text.darkest};
  text-align: center;

  @media (${breakpoints.smDown}) {
    font-size: 14px;
  }
`;

const Description = styled.p`
  font-size: 12px;
  line-height: 1.5;
  text-align: justify;
  color: ${colors.fonts.text.normal};
`;

//* What I Do Section
const WrapperSection = styled.section`
  margin: 50px 180px 1rem 480px;
  margin-top: 5rem;

  @media (${breakpoints.lgDown}) {
    margin-left: 295px;
    width: 70%;
  }

  @media (${breakpoints.mdDown}) {
    width: 90%;
    margin: 0 auto;
    margin-top: 3rem;
  }

  @media (${breakpoints.smDown}) {
    margin-top: 2rem;
  }
`;
const MainTitle = styled.h2`
  font-size: 30px;
  border-left: 5px solid #47b5ff;
`;

const TextDescription = styled.p`
  margin: 2rem 0;
  font-size: 14px;
  color: ${colors.fonts.text.normal};
  line-height: 1.5;

  @media (${breakpoints.lgDown}) {
    text-align: justify;
  }
`;

const Footer = styled.footer`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media (${breakpoints.lgDown}) {
    width: 100%;
  }

  @media (${breakpoints.mmdDown}) {
    width: 90%;
    height: 100px;
    margin-top: 3rem;
    margin-left: 32px;
  }

  @media (${breakpoints.smDown}) {
    width: 90%;
    margin: 0 auto;
  }
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

export default {
  WrapperCards,
  Card,
  Title,
  Description,
  MainTitle,
  TextDescription,
  TextFooter,
  Footer,
  WrapperSection,
};
