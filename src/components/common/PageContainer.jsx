import styled from 'styled-components';
import theme from '../../theme';
const { colors, breakpoints, fontSize, size } = theme;

const PageContainer = styled.div`
  margin: 0;
  width: 60%;
  margin-left: 600px;
  color: ${colors.fonts.normal};

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

export default PageContainer;
