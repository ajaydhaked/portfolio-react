import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    html,
    css,
    reactjs,
    redux,
    dakshana,
    iitkgp,
    tailwind,
    nodejs,
    mongodb,
    git,
    rca,
    nssc,
    carrent,
    jobit,
    tripguide,
    cplusplus,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
      path:"/about"
    },
    {
      id: "work",
      title: "Work",
      path:"/work"
    },
    {
      id: "projects",
      title: "Projects",
      path:"/projects"
    },
    {
      id: "contact",
      title: "Contact",
      path:'/contact'
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Competitive Programmer",
      icon: creator,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },

  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cplusplus,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },

  ];
  
  const experiences = [
    {
      title: "Core Team Member",
      company_name: "Rajasthan Cultural Association",
      icon: rca,
      iconBg: "#383E56",
      date: "January 2022 - Present",
      points: [
        "Rajasthan Cultural Association brings the spirit of Rajasthan, its culture and heritage.",
        "Collaborating with cross-functional teams including designe team and sponsorship team.",
        "The foundation stone of this journey was laid with the idea of brotherhood and unity among diversity.",
      ],
    },
    {
      title: "Sub Head",
      company_name: "National Students' Space Challenge",
      icon: nssc,
      iconBg: "#E6DEDD",
      date: "May 2022 - March 2023",
      points: [
        "Every year, the National Students' Space Challenge (NSSC) is organized by the students of IIT Kharagpur.",
        "NSSC is a national level space technology and space science Fest.",
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
  
  const academicsdetails = [
    {
      institute_name: "Indian Institute of Technology, Kharagpur",
      icon: iitkgp,
      iconBg: "#E6DEDD",
      date: "2021 - 2026",
      points: [
        "I am currently pursuing Computer Science and Engineering at IIT Kharagpur",
        "I am exposed to cutting-edge technology and a rigorous academic curriculum that enhances my skills and knowledge in the field.",
      ],
    },
    {
      institute_name: "Dakshana Foundation(JNV Bundi)",
      icon: dakshana,
      iconBg: "#E6DEDD",
      date: "2019 - 2021",
      points: [
        "The Dakshana Foundation is a non-profit organization.",
        "I successfully qualified the NDA test, which granted me the privilege of joining the Dakshana Scholarship Program.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Non Profit Organisation",
      description:
        "Our website provides a platform for restaurants, customers, and NGOs to connect and engage in a mutually beneficial way. ",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "ejs",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ajaydhaked/newNPO",
      website_link: "https://ajaydhaker.pythonanywhere.com/",
    },
    {
      name: "Small Social App",
      description:
        " On this website, you can follow other users and see their Posts and you can also post own message also also. ",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ajaydhaked/MySocialApp",
      website_link: "https://ajaydhaker.pythonanywhere.com/",
    },
    {
      name: "NSSC Website",
      description:
        " NSSC is a national-level fest purely dedicated towards space and space technology. A full fledged website was built in react",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "problem solving",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "blanklink",
      website_link: "https://2022.nssc.in",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects ,academicsdetails };