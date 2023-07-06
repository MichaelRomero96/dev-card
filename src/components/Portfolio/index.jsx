// import PageContainer from '../common/PageContainer';
import db from '../../db';
import theme from '../../theme';
import ProjectsSection from './ProjectsSection';
import Styled from './Styled';
import RedesIconWrapper from '../Resume/RedesIconWrapper';
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
  const { portfolio } = db;

  return (
    <>
      <Styled.WrapperContainer>
        <Styled.PageContainer>
          <div>
            <h1
              style={{
                textAlign: 'center',
                marginTop: '3rem',
              }}
            >
              Portafolio
            </h1>
            <Styled.DescriptionPortfolio>
              {portfolio.description}
            </Styled.DescriptionPortfolio>
          </div>
        </Styled.PageContainer>
      </Styled.WrapperContainer>
      <div
        style={{
          paddingTop: 50,
          paddingBottom: 30,
        }}
      >
        <Styled.PageContainer>
          <ProjectsSection projects={portfolio.projects} />
        </Styled.PageContainer>
      </div>
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
    </>
  );
};

export default Portfolio;
