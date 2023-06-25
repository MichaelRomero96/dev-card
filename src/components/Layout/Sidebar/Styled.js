import Styled from 'styled-components';
import theme from '../../../theme';

const { breakpoints, colors } = theme;

const HeaderWrapper = Styled.div`
  @media (${breakpoints.mmdDown}) {
    display: block;
    text-align: center;
    background-color: ${colors.default};
    padding: 0.5rem;
  }
`;

//TODO: Empezar con sidebar y sidebar responsive en style components

export default { HeaderWrapper };
