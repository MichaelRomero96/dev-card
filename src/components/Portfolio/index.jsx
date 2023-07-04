import PageContainer from '../common/PageContainer';
import db from '../../db';
import theme from '../../theme';
import ProjectsSection from './ProjectsSection';

const Portfolio = () => {
  const { portfolio } = db;
  const { colors, breakpoints, fontSize, size } = theme;

  return (
    <>
      <div
        style={{
          backgroundColor: colors.palette.tertiary,
          paddingTop: 50,
          paddingBottom: 30,
        }}
      >
        <PageContainer>
          <div>
            <h1
              style={{
                textAlign: 'center',
                margin: 0,
              }}
            >
              Portafolio
            </h1>
            <p
              style={{
                textAlign: 'center',
                margin: '15px 0',
                color: theme.colors.fonts.text.normal,
              }}
            >
              {portfolio.description}
            </p>
          </div>
        </PageContainer>
      </div>
      <div
        style={{
          paddingTop: 50,
          paddingBottom: 30,
        }}
      >
        <PageContainer>
          <ProjectsSection projects={portfolio.projects} />
        </PageContainer>
      </div>
    </>
  );
};

export default Portfolio;
