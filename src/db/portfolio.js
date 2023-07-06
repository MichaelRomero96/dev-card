const personalProjects = [
  {
    id: 0,
    title: 'Blog de Cafe',
    description: 'Un blog de cafe creado a base de HTML y CSS',
    image: '/public/img/blogCafe.PNG',
    link: 'https://blog-coffe-html-css.netlify.app/',
    details: {
      purpose: 'Proyecto personal', // cual es el alcance del proyecto, ejemplo: freelance, personal, etc
      webSite: 'https://blog-coffe-html-css.netlify.app/', // link a la pagina del proyecto
      github: 'https://github.com/Niico4/Blog-Coffe', // link al repositorio del proyecto
      detailedDescription:
        'Con el proyecto profundicé el dar estilos en CSS, aprendí a tener una semántica correcta a la hora de escribir HTML. Las tecnologías usadas fueros HTML y CSS.', // descripcion detallada del proyecto
      requeriments: [
        'HTML Semántico para estructurar correctamente el contenido.',
        'CSS para dar Estilos correctamente.',
        // 'Requirement phasellus ullamcorper ipsum rutrum nunc.',
      ],

      results: [
        {
          title: 'Sentar bases en CSS y HTML', // resultado obtenido de haber realizado el proyecto
          description:
            'Con este proyecto aprendi de una manera mas avanzada HTML semántico y CSS.', // descripcion del resultado
        },
        {
          title: 'Desafío / Problema',
          description:
            'Crear un blog para mejorar mis habilidades con HTML y CSS',
        },
        {
          title: 'Solución',
          description:
            'Plantear el diseño y desarrollarlo empleando HTML y CSS',
        },
      ],
    },
  },
  {
    id: 1,
    title: 'Formulario Animado con CSS',
    description: 'Formulario creado con animaciones de CSS',
    image: '/public/img/formularioGrid.PNG',
    link: 'https://animated-form-css.netlify.app/',
    details: {
      purpose: 'Proyecto personal', // cual es el alcance del proyecto, ejemplo: freelance, personal, etc
      webSite: 'https://animated-form-css.netlify.app/', // link a la pagina del proyecto
      github: 'https://github.com/Niico4/animated-form-css', // link al repositorio del proyecto
      detailedDescription:
        'Aprender sobre las animaciones y profundizar más temas en CSS.', // descripcion detallada del proyecto
      requeriments: [
        'Tener conocimiento previo de animaciones en CSS',
        'Conocimiento en HTML para una correcta estructuración',
      ],
      results: [
        {
          title: 'Profundizar animaciones en CSS', // resultado obtenido de haber realizado el proyecto
          description:
            'Con este proyecto aprendi a utilizar las animaciones y las Pseudo-classes de CSS', // descripcion del resultado
        },
        {
          title: 'Animaciones',
          description:
            'Aprender en que situaciones emplear animaciones con CSS',
        },
        {
          title: 'Pseudo-classes',
          description:
            'Tener un conocimiento mas avanzado sobre las pseudo-classes en CSS',
        },
      ],
    },
  },

  {
    id: 2,
    title: 'Página con FlexBox',
    description: 'Página creada con solo FlexBox, totalmente responsive',
    image: '/public/img/paginaFlex.PNG',
    link: 'https://page-only-flex.netlify.app/',
    details: {
      purpose: 'Proyecto personal', // cual es el alcance del proyecto, ejemplo: freelance, personal, etc
      webSite: 'https://page-only-flex.netlify.app/', // link a la pagina del proyecto
      github: 'https://github.com/Niico4/Page-Flexbox', // link al repositorio del proyecto
      detailedDescription:
        'Es una página creada a base de HTML y CSS, se utilizo flexbox para el diseño y lograr el responsive.', // descripcion detallada del proyecto
      requeriments: [
        'Tener conocimiento en CSS para lograr un buen diseño',
        'Conocimiento previo de Flexbox para realizar la distribución y el responsive',
        'Conocimiento de HTML para estructurar los datos',
      ],
      results: [
        {
          title: 'Sentar bases en Flexbox, CSS', // resultado obtenido de haber realizado el proyecto
          description:
            'Con este proyecto aprendi a utilizar Flex para generar el diseño de una página y a su vez generar un correcto responsive.', // descripcion del resultado
        },
        {
          title: 'Desafío / Problema',
          description: 'Tener unas mejores bases en Flexbox',
        },
        {
          title: 'Solución',
          description:
            'Teniendo el diseño, desarrollarlo con CSS y a su vez realizar el responsive con flex.',
        },
      ],
    },
  },

  {
    id: 3,
    title: 'Administrador de Pacientes con IndexDB',
    description: 'Administrador de Pacientes con base de datos (IndexDB) ',
    image: '/public/img/pacientesIndexDb.PNG',
    link: 'https://manage-patients-db.netlify.app/',
    details: {
      purpose: 'Proyecto personal', // cual es el alcance del proyecto, ejemplo: freelance, personal, etc
      webSite: 'https://manage-patients-db.netlify.app/', // link a la pagina del proyecto
      github: 'https://github.com/Niico4/Manage-Patients-DB', // link al repositorio del proyecto
      detailedDescription:
        'Un administrador de citas creado a base de HTML, CSS Y JavaScript, se empleo IndexDB como base de datos', // descripcion detallada del proyecto
      requeriments: [
        'Conocimiento en JavaScript para desarrollar la lógica',
        'Conocimiento en IndexDB para realizar la base de datos',
        'CSS y HTML para lograr un buen diseño y estructuración',
      ],
      results: [
        {
          title: 'Solidificar bases en JavaScript', // resultado obtenido de haber realizado el proyecto
          description:
            'Con este proyecto aprendi a utilizar IndexDB como base de datos de JavaScript', // descripcion del resultado
        },
        {
          title: 'Desafio / Problema',
          description:
            'Elaborar un administrador de citas para una veterinaria.',
        },
        {
          title: 'Solución',
          description:
            'Se elabro el diseño, para tener más realismo se empleo IndexDB como base de datos y una lógica para validar los inputs requeridos.',
        },
      ],
    },
  },
  {
    id: 4,
    title: 'Validador de Usuarios',
    description: 'Validador de Emails y Usuarios con JavaScript, HTML y CSS',
    image: '/public/img/validadorEmail.PNG',
    link: 'https://email-validator-js.netlify.app/',
    details: {
      purpose: 'Proyecto personal', // cual es el alcance del proyecto, ejemplo: freelance, personal, etc
      webSite: 'https://email-validator-js.netlify.app/', // link a la pagina del proyecto
      github: 'https://github.com/Niico4/Email-validator', // link al repositorio del proyecto
      detailedDescription:
        'Se empleo una lógica con JavaScript para validar un email o un Usuario', // descripcion detallada del proyecto
      requeriments: [
        'Lógica de JavaScript para una correcta validación.',
        'CSS para el estilo, colores y diseño.',
        'HTML para la estructuracíon del Proyecto',
      ],
      results: [
        {
          title: 'Mejorar lógica en JavaScript', // resultado obtenido de haber realizado el proyecto
          description:
            'Con este proyecto aprendi a sentar bases en la lógica de JS', // descripcion del resultado
        },
        {
          title: 'Desafio / Problema',
          description: 'Realizar una correcta validación de usuarios',
        },
        {
          title: 'Solución',
          description:
            'Se elaboro una lógica que valida cada input, debe contener una información correcta para tener un buen resultado',
        },
      ],
    },
  },
  {
    id: 5,
    title: 'Buscador de Carros',
    description:
      'Buscador de carros con un filtro para buscar con más exactitud.',
    image: '/public/img/buscadorAutos.PNG',
    link: 'https://car-search-js.netlify.app/',
    details: {
      purpose: 'Proyecto personal', // cual es el alcance del proyecto, ejemplo: freelance, personal, etc
      webSite: 'https://car-search-js.netlify.app/', // link a la pagina del proyecto
      github: 'https://github.com/Niico4/Car-search', // link al repositorio del proyecto
      detailedDescription:
        'Se utilizo de JavaScript para filtrar los resultados de acuerdo a los solicitados.', // descripcion detallada del proyecto
      requeriments: [
        'Lógica de JavaScript para realizar un filtro de datos correctamente.',
        'CSS para dar un estilo y un buen diseño.',
        'HTML para estructurar correctamente la pagina.',
      ],
      results: [
        {
          title: 'Sentar bases en JavaScript', // resultado obtenido de haber realizado el proyecto
          description:
            'Con este proyecto aprendi a crear un filtro que arroje los datos que deseo.', // descripcion del resultado
        },
        {
          title: 'Desafio / Problema',
          description: 'Elaborar un filtro de datos',
        },
        {
          title: 'Solución',
          description:
            'Se elaboro un diseño con HTML y CSS, se empleo una lógica la cual tras llenar unos campos arroja los datos que se encuentren en la base de datos',
        },
      ],
    },
  },
  {
    id: 6,
    title: 'Controlador de Tareas',
    description: 'Un controlador o recordador de tareas o notas',
    image: '/public/img/misTaresLS.PNG',
    link: 'https://notes-localstorage.netlify.app/',
    details: {
      purpose: 'Proyecto personal', // cual es el alcance del proyecto, ejemplo: freelance, personal, etc
      webSite: 'https://notes-localstorage.netlify.app/', // link a la pagina del proyecto
      github: 'https://github.com/Niico4/Notes-LocalStorage', // link al repositorio del proyecto
      detailedDescription:
        'Se uso JavaScript para que funcionara con LocalStorage y se guardaron los datos hasta que la persona lo desee.', // descripcion detallada del proyecto
      requeriments: [
        'JavaScript y manejo de LocalStorage para almacenar Datos',
        'CSS para dar un estilo y un buen diseño.',
        'HTML para estructurar correctamente la pagina.',
      ],
      results: [
        {
          title: 'Sentar bases en JavaScript', // resultado obtenido de haber realizado el proyecto
          description:
            'Con este proyecto aprendi a almacenar los datos deseados con LocalStorage', // descripcion del resultado
        },
        {
          title: 'Desafio / Problema',
          description:
            'Mejorar el conocimiento al emplear correctamente LocalStorage',
        },
        {
          title: 'Solución',
          description:
            'Diseño con CSS, se creo una lógica con JS y se empleo LocalStorage para almacenar los datos escritos.',
        },
      ],
    },
  },
  {
    id: 7,
    title: 'Carrito de compras',
    description: 'Un carrito de compras, almacena tus compras.',
    image: '/public/img/carrtioLS.PNG',
    link: 'https://shopping-car-ls.netlify.app/',
    details: {
      purpose: 'Proyecto personal', // cual es el alcance del proyecto, ejemplo: freelance, personal, etc
      webSite: 'https://shopping-car-ls.netlify.app/', // link a la pagina del proyecto
      github: 'https://github.com/Niico4/Shopping-car', // link al repositorio del proyecto
      detailedDescription:
        'Se empleo LocalStorage para almacenar las compras que la persona elige, las compras se borras hasta que la persona elija.', // descripcion detallada del proyecto
      requeriments: [
        'JavaScript y manejo de LocalStorage para almacenar Datos',
        'CSS para dar un estilo y un buen diseño.',
        'HTML para estructurar correctamente la pagina.',
      ],
      results: [
        {
          title: 'Sentar bases en JavaScript', // resultado obtenido de haber realizado el proyecto
          description:
            'Con este proyecto solidifique la base de LocalStorage para almacenar los datos deseados', // descripcion del resultado
        },
        {
          title: 'Desafio / Problema',
          description:
            'Tener un mayor conocimiento y desarrollar una correcta lógica',
        },
        {
          title: 'Solución',
          description:
            'Se creo un clon de un carrito de compras el cual se hizo con LocalStorage para almacenar los datos, JS para borrar en caso deseado',
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
