import React from 'react';
import Card from '../Card';
import theme from '../../../theme';

const ProjectsSection = ({ projects }) => {
  const { colors } = theme;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
      }}
    >
      {projects.map((project) => (
        <Card key={project.title} project={project} />
      ))}
    </div>
  );
};

export default ProjectsSection;
