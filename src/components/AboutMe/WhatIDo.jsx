import TechnologiesCards from './TechnologiesCards';
import db from '../../db';
import Styled from './TechnologiesCards/Styled';
import RedesIconWrapper from '../Resume/RedesIconWrapper';
import { FaGithub } from 'react-icons/fa';

const WhatIDo = () => {
  const { aboutMe } = db;
  return (
    <Styled.WrapperSection>
      <article>
        <Styled.MainTitle>
          <span style={{ marginRight: '1rem' }}></span>What I Do
        </Styled.MainTitle>
        <Styled.TextDescription>{aboutMe.user.whatIDo}</Styled.TextDescription>
        <article>
          <div>
            <TechnologiesCards />
          </div>
        </article>
      </article>
      <Styled.Footer>
        <Styled.TextFooter>
          Dev card v 1.0{' '}
          <RedesIconWrapper>
            <a href="https://github.com/MichaelRomero96/dev-card">
              <FaGithub style={{ cursor: 'pointer', marginLeft: '10px' }} />
            </a>
          </RedesIconWrapper>
        </Styled.TextFooter>
      </Styled.Footer>
    </Styled.WrapperSection>
  );
};

export default WhatIDo;
