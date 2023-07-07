import React from 'react';
import headerProfile from '../../../../public/img/profileSidebarNico.png';
import db from '../../../db';
import { FaArrowAltCircleRight, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Styled from './Styled';

const Header = () => {
  const { aboutMe } = db;
  return (
    <Styled.Header>
      <Styled.Flex>
        <Styled.WrapperContent>
          <Styled.Title>{aboutMe.user.name}</Styled.Title>
          <Styled.SubTitleProfesion>
            {aboutMe.user.profession}
          </Styled.SubTitleProfesion>
          <Styled.Description>{aboutMe.user.description}</Styled.Description>
          <Styled.FlexButtons>
            <Styled.ButtonPortfolio>
              <Link style={{ color: '#fff' }} to="/portfolio">
                <FaArrowAltCircleRight
                  style={{ verticalAlign: 'top', marginRight: '2px' }}
                />{' '}
                View Portafolio
              </Link>
            </Styled.ButtonPortfolio>

            <Styled.ButtonResume style={{}}>
              <Link style={{ color: '#fff' }} to="/resume">
                <FaFileAlt
                  style={{ verticalAlign: 'top', marginRight: '5px' }}
                />
                View Resume
              </Link>
            </Styled.ButtonResume>
          </Styled.FlexButtons>
        </Styled.WrapperContent>
        <Styled.ImgProfile src={headerProfile} alt="" />
      </Styled.Flex>
    </Styled.Header>
  );
};

export default Header;
