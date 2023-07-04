const personalProjects = [
  {
    id: 0,
    title: 'Project 1',
    description: 'This is a description of project 1',
    image:
      'https://themes.3rdwavemedia.com/devcard/bs5/2.0/assets/images/project/project-2.jpg',
    link: 'https://github.com',
    details: {
      purpose: 'Proyecto personal', // cual es el alcance del proyecto, ejemplo: freelance, personal, etc
      webSite: 'https://github.com', // link a la pagina del proyecto
      github: 'https://github.com', // link al repositorio del proyecto
      detailedDescription:
        'Esta es una descripcion detallada del alcance del proyecto, tecnologias usadas y requerimientos especificos', // descripcion detallada del proyecto
      requeriments: [
        'Requirement lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        'Requirement donec pede justo, fringilla vel, aliquet nec.',
        'Requirement phasellus ullamcorper ipsum rutrum nunc.',
      ],
      overview: 'This is a description of project 1', // descripcion del proyecto
      challenge: 'This is a description of project 1', // descripcion del proyecto
      solution: 'This is a description of project 1', // descripcion del proyecto
      results: [
        {
          title: 'Sentar bases en CSS', // resultado obtenido de haber realizado el proyecto
          description: 'Con este proyecto aprendi a sentar bases en CSS', // descripcion del resultado
        },
        {
          title: 'This is a description of project 1',
          description: 'This is a description of project 1',
        },
        {
          title: 'This is a description of project 1',
          description: 'This is a description of project 1',
        },
        {
          title: 'This is a description of project 1',
          description: 'This is a description of project 1',
        },
      ],
    },
  },
  {
    id: 1,
    title: 'Project 2',
    description: 'This is a description of project 2',
    image:
      'https://themes.3rdwavemedia.com/devcard/bs5/2.0/assets/images/project/project-1.jpg',
    link: 'https://github.com',
    details: {
      purpose: 'Proyecto personal', // cual es el alcance del proyecto, ejemplo: freelance, personal, etc
      webSite: 'https://github.com', // link a la pagina del proyecto
      github: 'https://github.com', // link al repositorio del proyecto
      detailedDescription:
        'Esta es una descripcion detallada del alcance del proyecto, tecnologias usadas y requerimientos especificos', // descripcion detallada del proyecto
      requeriments: [
        'Requirement lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        'Requirement donec pede justo, fringilla vel, aliquet nec.',
        'Requirement phasellus ullamcorper ipsum rutrum nunc.',
      ],
      overview: 'This is a description of project 1', // descripcion del proyecto
      challenge: 'This is a description of project 1', // descripcion del proyecto
      solution: 'This is a description of project 1', // descripcion del proyecto
      results: [
        {
          title: 'Sentar bases en CSS', // resultado obtenido de haber realizado el proyecto
          description: 'Con este proyecto aprendi a sentar bases en CSS', // descripcion del resultado
        },
        {
          title: 'This is a description of project 1',
          description: 'This is a description of project 1',
        },
        {
          title: 'This is a description of project 1',
          description: 'This is a description of project 1',
        },
        {
          title: 'This is a description of project 1',
          description: 'This is a description of project 1',
        },
      ],
    },
  },
];

const portfolio = {
  description: 'This is my portfolio.',
  projects: [...personalProjects],
};

export default portfolio;
