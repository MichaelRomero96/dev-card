import styled from 'styled-components';
import theme from '../../../theme';

const { colors, breakpoints, fontSize, size } = theme;

const WrapperDetails = styled.div`
  width: 100%;
  background-color: ${colors.palette.tertiary};
  border: 1px solid #f3f3f3f3;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 114px;

  @media (${breakpoints.lgDown}) {
    grid-template-columns: 1fr;
  }

  @media (${breakpoints.smDown}) {
    margin: 0;
  }
`;

const WrapperBody = styled.div`
  padding-top: 50px;
  padding-bottom: 30px;
  margin-left: 275px;

  @media (${breakpoints.mmdDown}) {
    margin: 0;
  }
`;

const Wrapperinfo = styled.div`
  display: grid;
  gap: 10px;
  margin-left: 100px;

  @media (${breakpoints.smDown}) {
    margin: 0;
  }
`;

const WrapperRequeriment = styled.div`
  display: flex;
  gap: 40px;
  margin-left: 300px;
  text-align: center;

  @media (${breakpoints.lgDown}) {
    flex-direction: row;
  }
`;

const PageContainerDetails = styled.div`
  margin-left: 300px;

  @media (${breakpoints.mmdDown}) {
    margin: 0;
  }

  @media (${breakpoints.smDown}) {
    margin: 0;
  }
`;

const WrapperPageContainerDetails = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${breakpoints.smDown}) {
    width: 100%;
  }
`;

const ImgDetails = styled.img`
  height: 100%;
  width: 450px;
  margin-left: 200px;
  object-fit: cover;
  box-shadow: 1px 1px 20px 10px rgba(0, 0, 0, 0.2);

  @media (${breakpoints.lgDown}) {
    width: 100%;
    margin-left: 20px;
  }

  @media (${breakpoints.smDown}) {
    margin: 0;
  }
`;

const WrapperResultado = styled.div`
  margin-top: 50px;
  margin-left: 315px;
  background-color: ${colors.palette.primary};
  padding: 20px;
  border-radius: 8px;

  @media (${breakpoints.lgDown}) {
    width: 100%;
    margin-left: 160px;
  }

  @media (${breakpoints.smDown}) {
    width: 90%;
    margin: 0;
  }
`;

const Resultados = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  text-align: center;

  @media (${breakpoints.smDown}) {
    display: block;
  }
`;

const TitlePersonal = styled.h2`
  margin-bottom: 12px;

  @media (${breakpoints.lgDown}) {
    margin-top: 40px;
    text-align: center;
    margin-right: 40px;
  }

  @media (${breakpoints.smDown}) {
    margin-right: 0;
  }
`;

const TextFooter = styled.p`
  text-align: center;
  font-size: ${fontSize.sm};
  margin-left: 350px;

  @media (${breakpoints.lgDown}) {
    margin-left: 280px;
  }

  @media (${breakpoints.mmdDown}) {
    margin: 0;
    height: 80px;
  }

  @media (${breakpoints.smDown}) {
    /* margin-left: 18px; */
    height: 80px;
  }
`;

const Footer = styled.footer`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media (${breakpoints.mmdDown}) {
    height: 0;
    margin-top: 5rem;
  }
`;

const DescriptionTitle = styled.p`
  text-align: center;
  margin: 15px 0;
  color: ${theme.colors.fonts.text.normal};

  @media (${breakpoints.smDown}) {
    width: 90%;
    margin: 0 auto;
    margin-top: 1rem;
  }
`;

export default {
  WrapperDetails,
  Wrapperinfo,
  ImgDetails,
  WrapperRequeriment,
  PageContainerDetails,
  WrapperPageContainerDetails,
  WrapperResultado,
  TextFooter,
  Footer,
  TitlePersonal,
  WrapperBody,
  Resultados,
  DescriptionTitle,
};
