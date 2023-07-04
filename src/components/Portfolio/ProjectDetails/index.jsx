import { useParams } from 'react-router-dom';
import db from '../../../db';
import PageContainer from '../../common/PageContainer';
import theme from '../../../theme';

const ProjectDetails = () => {
  const { colors } = theme;
  const { portfolio } = db;
  const { projects } = portfolio;
  const { projectId } = useParams();
  const project = projects.find((project) => project.id == projectId);

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
              {project.title}
            </h1>
            <p
              style={{
                textAlign: 'center',
                margin: '15px 0',
                color: theme.colors.fonts.text.normal,
              }}
            >
              {project.description}
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
          <div
            style={{
              minWidth: '100%',
              backgroundColor: colors.palette.tertiary,
              border: '1px solid #F3F3F3F3',
              padding: '30px',
              display: 'grid',
              gridTemplateColumns: '300px 1fr',
              gap: '20px',
            }}
          >
            <figure>
              <img
                style={{ height: '300px' }}
                src={project.image}
                alt="project"
              />
            </figure>
            <div style={{ display: 'grid', gap: '10px' }}>
              <h2 style={{ marginBottom: '10px' }}>
                {project.details.purpose}
              </h2>
              <a href={project.details.webSite} target="_blank">
                Sitio web
              </a>
              <p>{project.details.detailedDescription}</p>
              <div>
                <h4 style={{ marginBottom: '10px' }}>Requerimientos</h4>
                <ul>
                  {project.details?.requeriments.map((requirement) => (
                    <li style={{ marginBottom: '5px' }} key={requirement}>
                      - {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '50px' }}>
            <h2 style={{ marginBottom: '15px' }}>Descripción General</h2>
            <p>{project.details.overview}</p>
          </div>
          <div style={{ marginTop: '50px' }}>
            <h2 style={{ marginBottom: '15px' }}>Desafío / Problema</h2>
            <p>{project.details.challenge}</p>
          </div>
          <div style={{ marginTop: '50px' }}>
            <h2 style={{ marginBottom: '15px' }}>Solución</h2>
            <p>{project.details.solution}</p>
          </div>
          <div style={{ marginTop: '50px' }}>
            <h2 style={{ marginBottom: '20px' }}>Resultados</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '10px',
              }}
            >
              {project.details.results.map((result) => (
                <div
                  style={{
                    marginBottom: '10px',
                    border: `1px solid #F3F3F3F3`,
                    backgroundColor: colors.palette.tertiary,
                    padding: '10px',
                  }}
                >
                  <p
                    style={{
                      marginBottom: '15px',
                      color: colors.palette.primary,
                    }}
                  >
                    {result.title}
                  </p>
                  <p>{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
};

export default ProjectDetails;
