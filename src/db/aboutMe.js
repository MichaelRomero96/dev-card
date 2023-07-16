const user = {
  name: 'Nicolas Garzón',
  profession: 'Junior Frontend Developer',
  description:
    "I'm a Junior web developer with two years of experience in HTML, CSS, and JavaScript. I also have one year of experience working with the React, TypeScript, Tailwind, and Styled Component frameworks. I have participated in the development and implementation of web projects, demonstrating strong skills in creating attractive and functional interfaces. I am passionate about programming and am constantly seeking opportunities to expand my knowledge and improve my skills.",
  portfolio: '/portfolio',
  biography: '/resume',
  whatIDo:
    "I'm a web developer with two years of experience in creating and developing web pages, with strong skills in designing intuitive and scalable interfaces, problem-solving, and teamwork. I am always looking to learn and improve my technical skills. Want to know more about my experience? Check out my CV and Portfolio.",
};

const sidebar = {
  name: 'Nicolas Garzón',
  description:
    "Hi, my name is Nicolas Garzón and I'm a Junior Frontend Developer.Welcome to my personal website!",
};

const technologies = [
  {
    name: 'Vanilla JavaScript',
    description:
      "Extensive experience and solid knowledge in JavaScript, I have advanced skills in handling objects and arrays, as well as in making API's requests using Fetch. My mastery of asynchronous programming is outstanding, backed by solid programming logic. I strive daily to perfect my skills and expand my knowledge in this field.",
    id: 'js',
  },

  {
    name: 'HTML & CSS',
    description:
      'Extensive experience and solid knowledge in HTML and CSS, I have outstanding development in creating web pages. My ability to semantically structure HTML code is outstanding. In addition, I have skills to carry out attractive and functional designs using both CSS and frameworks.',
    id: 'html',
    id2: 'css',
  },
  {
    name: 'React, TypeScript',
    description:
      'Outstanding experience in development using frameworks such as React and TypeScript, I have solid foundations and knowledge to create fascinating web applications in React. In addition, in TypeScript, I have skills to accurately type different data types, allowing me to maintain greater control, order, and security in my code.',
    id: 'react',
    id2: 'typescript',
  },

  {
    name: 'TailwindCSS & Styled Components',
    description:
      'Outstanding experience in styling web pages using frameworks such as TailwindCSS and Styled Components, I have skills to create attractive interfaces in both. My solid foundation and good handling of these frameworks allow me to use them efficiently and effectively.',
    id: 'tailwind',
    id2: 'styled',
  },
  ,
  {
    name: 'Git & GutHub',
    description:
      'Extensive experience in Git and GitHub, I have skills to manage repositories and version projects accurately, with control and order. In both individual and team projects, I have used these tools to ensure efficient version management and effective collaborative workflow.',
    id: 'git',
    id2: 'github',
  },

  {
    name: 'AirTable & FireBase',
    description:
      'Experience in Airtable and Firebase, with solid foundations and fundamental knowledge in both platforms. Although my experience is not extensive, I have the necessary skills to use these tools and take advantage of their basic functionalities effectively.',
    id: 'airtable',
    id2: 'firebase',
  },
];

const servicesAndPricing = {
  servicePackages:
    'https://themes.3rdwavemedia.com/devcard/bs5/2.0/services.html',
  description:
    'Im currently taking on freelance software development work. You are welcome to contact me for a custom quote for your project. I also offer development service packages with fixed pricing.',
};

const featuredProjects = [
  {
    title: 'Project Heading',
    description:
      'Short description of the client and project requirements. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    requirements: [
      'Requirement lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      'Requirement donec pede justo, fringilla vel, aliquet nec.',
      'Requirement phasellus ullamcorper ipsum rutrum nunc.',
    ],
  },
  {
    title: 'Project Heading',
    description:
      'Short description of the client and project requirements. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    requirements: [
      'Requirement lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      'Requirement donec pede justo, fringilla vel, aliquet nec.',
      'Requirement phasellus ullamcorper ipsum rutrum nunc.',
    ],
  },
  {
    title: 'Project Heading',
    description:
      'Short description of the client and project requirements. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    requirements: [
      'Requirement lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      'Requirement donec pede justo, fringilla vel, aliquet nec.',
      'Requirement phasellus ullamcorper ipsum rutrum nunc.',
    ],
  },
  {
    title: 'Project Heading',
    description:
      'Short description of the client and project requirements. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    requirements: [
      'Requirement lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      'Requirement donec pede justo, fringilla vel, aliquet nec.',
      'Requirement phasellus ullamcorper ipsum rutrum nunc.',
    ],
  },
];

const latestPostsCards = [
  {
    title: 'Top 3 JavaScript Frameworks',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis',
    blogLink: 'https://themes.3rdwavemedia.com/devcard/bs5/2.0/blog-post.html',
  },
  {
    title: 'About Remote Working',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis',
    blogLink: 'https://themes.3rdwavemedia.com/devcard/bs5/2.0/blog-post.html',
  },
  {
    title: 'A Guide to Becoming a Full-Stack Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis',
    blogLink: 'https://themes.3rdwavemedia.com/devcard/bs5/2.0/blog-post.html',
  },
];

const aboutMe = {
  user,
  technologies,
  servicesAndPricing,
  featuredProjects,
  latestPostsCards,
  sidebar,
};

export default aboutMe;
