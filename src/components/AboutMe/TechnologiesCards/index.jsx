import data from '../../../db/aboutMe';
import Icon from './Icon';
import Styled from './Styled';

const TechnologiesCards = () => {
  const { technologies } = data;
  return (
    <Styled.WrapperCards>
      {technologies?.map(({ name, description, id, id2 }) => (
        <Styled.Card key={name}>
          <Icon icon={id} />
          <Icon icon={id2} />
          <Styled.Title>{name}</Styled.Title>
          <Styled.Description>{description}</Styled.Description>
        </Styled.Card>
      ))}
    </Styled.WrapperCards>
  );
};

export default TechnologiesCards;
