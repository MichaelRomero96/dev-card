import React from 'react';
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNode,
  FaNpm,
  FaPhp,
  FaPython,
  FaReact,
} from 'react-icons/fa';

import {
  SiAirtable,
  SiFirebase,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const Icon = ({ icon }) => {
  switch (icon) {
    case 'js':
      return <FaJsSquare style={{ color: '#ecd101', fontSize: '26px' }} />;
    case 'html':
      return <FaHtml5 style={{ color: '#DE6E3C', fontSize: '26px' }} />;
    case 'css':
      return (
        <FaCss3
          style={{ color: '#53A7DC', fontSize: '26px', marginLeft: '10px' }}
        />
      );
    case 'react':
      return <FaReact style={{ color: '#62D4FA', fontSize: '26px' }} />;
    case 'typescript':
      return (
        <SiTypescript
          style={{ color: '#0000ff', fontSize: '26px', marginLeft: '10px' }}
        />
      );
    case 'tailwind':
      return <SiTailwindcss style={{ color: '#38BDf8', fontSize: '26px' }} />;
    case 'styled':
      return (
        <SiStyledcomponents
          style={{ color: '#000000', fontSize: '26px', marginLeft: '10px' }}
        />
      );
    case 'git':
      return <FaGitAlt style={{ color: '#F1502F', fontSize: '26px' }} />;
    case 'github':
      return (
        <FaGithub
          style={{ color: '#000000', fontSize: '26px', marginLeft: '10px' }}
        />
      );
    case 'airtable':
      return <SiAirtable style={{ color: '#000000', fontSize: '26px' }} />;
    case 'firebase':
      return (
        <SiFirebase
          style={{ color: '#DE6E3C', fontSize: '26px', marginLeft: '10px' }}
        />
      );
    default:
      return null;
  }
};

export default Icon;
