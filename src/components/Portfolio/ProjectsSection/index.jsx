import React from 'react';
import Card from '../Card';
import theme from '../../../theme';
import Styled from '../Styled';

const ProjectsSection = ({ projects }) => {
  const { colors } = theme;
  return (
    <Styled.Container>
      {projects.map((project) => (
        <Card key={project.title} project={project} />
      ))}
    </Styled.Container>
  );
};

export default ProjectsSection;
