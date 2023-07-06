import styled from 'styled-components';
import theme from '../../../theme';

const { colors, breakpoints, fontSize, size } = theme;

const WrapperCard = styled.div`
  background-color: ${colors.palette.tertiary};
  display: flex;
  gap: 20px;
  border: 1px solid #fffffff3;
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.6));
  filter: brightness(100%);
  cursor: pointer;
  margin-bottom: 2rem;

  @media (${breakpoints.smDown}) {
    flex-direction: column;
  }
`;

const ImgCard = styled.img`
  width: 250px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;

  @media (${breakpoints.smDown}) {
    width: 100%;
  }
`;

const WrapperText = styled.div`
  padding: 20px 30px;
  display: grid;

  @media (${breakpoints.smDown}) {
    gap: 1rem;
    text-align: center;
  }
`;

export default { WrapperCard, ImgCard, WrapperText };
