import styled from 'styled-components';
import theme from '../../theme';

const { colors, breakpoints, fontSize, size } = theme;

const WrapperContainer = styled.div`
  background-color: ${colors.palette.tertiary};
  padding-top: 50;
  padding-bottom: 30;
`;

const DescriptionPortfolio = styled.p`
  text-align: center;
  margin: 15px 0;
  color: ${theme.colors.fonts.text.normal};
`;

const PageContainer = styled.div`
  margin-left: 350px;
  @media (${breakpoints.lgDown}) {
    width: 60%;
    grid-template-columns: 1fr;
  }
  @media (${breakpoints.mmdDown}) {
    width: 90%;
    margin: 0 auto;
  }
`;

const Footer = styled.footer`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media (${breakpoints.lgDown}) {
    width: 100%;
    margin-left: 20px;
  }

  @media (${breakpoints.mmdDown}) {
    width: 90%;
    height: 100px;
    margin-top: 3rem;
    margin-left: 32px;
  }
`;

const TextFooter = styled.p`
  text-align: center;
  font-size: ${fontSize.sm};
  margin-left: 350px;

  @media (${breakpoints.mmdDown}) {
    line-height: 0;
    padding-top: ${size.xs};
    padding-bottom: ${size.xs};
  }

  @media (${breakpoints.lgDown}) {
    margin: 0 auto;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (${breakpoints.lgDown}) {
    grid-template-columns: 1fr;
  }
`;

export default {
  WrapperContainer,
  DescriptionPortfolio,
  PageContainer,
  TextFooter,
  Footer,
  Container,
};
