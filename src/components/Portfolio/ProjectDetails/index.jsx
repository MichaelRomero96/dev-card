import { useParams } from 'react-router-dom';
import db from '../../../db';
import theme from '../../../theme';
import Styled from './Styled';
import '../../css/buttonPortfolio.css';
import RedesIconWrapper from '../../Resume/RedesIconWrapper';
import { FaGithub } from 'react-icons/fa';

const ProjectDetails = () => {
  const { colors } = theme;
  const { portfolio } = db;
  const { projects } = portfolio;
  const { projectId } = useParams();
  const project = projects.find((project) => project.id == projectId);

  return (
    <>
      <div>
        <div
          style={{
            backgroundColor: colors.palette.tertiary,
            paddingTop: 50,
            paddingBottom: 30,
          }}
        >
          <Styled.PageContainerDetails>
            <div>
              <h1
                style={{
                  textAlign: 'center',
                  margin: 0,
                }}
              >
                {project.title}
              </h1>
              <Styled.DescriptionTitle>
                {project.description}
              </Styled.DescriptionTitle>
            </div>
          </Styled.PageContainerDetails>
        </div>
        <Styled.WrapperBody>
          <Styled.WrapperPageContainerDetails>
            <Styled.WrapperDetails>
              <figure>
                <Styled.ImgDetails src={project.image} alt="project" />
              </figure>
              <Styled.Wrapperinfo>
                <Styled.TitlePersonal>
                  {project.details.purpose}
                </Styled.TitlePersonal>
                <button className="button">
                  <a
                    style={{ color: '#47b5ff', fontWeight: '700' }}
                    href={project.details.webSite}
                    target="_blank"
                  >
                    <span className="span">Sitio web</span>
                  </a>
                </button>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#4f4f4f',
                    marginBottom: '12px',
                  }}
                >
                  {project.details.detailedDescription}
                </p>
                <div>
                  <h4 style={{ marginBottom: '12px' }}>Requerimientos</h4>
                  <ul>
                    {project.details?.requeriments.map((requirement) => (
                      <li
                        style={{
                          marginBottom: '5px',
                          fontSize: '14px',
                          color: '#4f4f4f',
                        }}
                        key={requirement}
                      >
                        - {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </Styled.Wrapperinfo>
            </Styled.WrapperDetails>
            <Styled.WrapperResultado>
              <h2
                style={{
                  marginBottom: '20px',
                  textAlign: 'center',
                  color: '#dff6ff',
                }}
              >
                Resultados
              </h2>
              <Styled.Resultados>
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
                        fontWeight: '700',
                        textAlign: 'center',
                      }}
                    >
                      {result.title}
                    </p>
                    <p
                      style={{
                        color: colors.fonts.text.normal,
                        fontSize: '14px',
                      }}
                    >
                      {result.description}
                    </p>
                  </div>
                ))}
              </Styled.Resultados>
            </Styled.WrapperResultado>
          </Styled.WrapperPageContainerDetails>
        </Styled.WrapperBody>
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

export default ProjectDetails;
