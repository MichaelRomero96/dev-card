import { useNavigate } from 'react-router-dom';
import theme from '../../../theme';
import Styled from './Styled';

const Card = ({ project }) => {
  const { colors } = theme;
  const { description, title, image, link, id } = project;
  const navigate = useNavigate();
  return (
    <Styled.WrapperCard onClick={() => navigate(`${id}`)}>
      <figure>
        <Styled.ImgCard src={image} />
      </figure>
      <Styled.WrapperText>
        <h3>{title}</h3>
        <div>
          <p style={{ color: colors.fonts.text.lightest }}>{description}</p>
        </div>
        <a
          style={{ color: '#1363df', fontWeight: '600' }}
          href={link}
          target="_blank"
        >
          Link al sitio web
        </a>
      </Styled.WrapperText>
    </Styled.WrapperCard>
  );
};

export default Card;
