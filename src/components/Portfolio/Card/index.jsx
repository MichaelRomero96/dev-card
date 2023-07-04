import { useNavigate } from 'react-router-dom';
import theme from '../../../theme';

const Card = ({ project }) => {
  const { colors } = theme;
  const { description, title, image, link, id } = project;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${id}`)}
      style={{
        backgroundColor: colors.palette.tertiary,
        display: 'grid',
        gridTemplateColumns: '1fr 400px',
        border: '1px solid #F3F3F3F3',
        filter: 'drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25))',
        filter: 'brightness(100%)',
        cursor: 'pointer',
      }}
    >
      <figure>
        <img style={{ maxHeight: '230px' }} src={image} alt="" />
      </figure>
      <div style={{ padding: '20px 30px', display: 'grid' }}>
        <h3>{title}</h3>
        <div>
          <p style={{ color: colors.fonts.text.lightest }}>{description}</p>
        </div>
        <a href={link} target="_blank">
          Link al sitio web
        </a>
      </div>
    </div>
  );
};

export default Card;
