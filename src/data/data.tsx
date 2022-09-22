import {
  AcademicCapIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
  SpeakerphoneIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
/* import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg'; */
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume',
  description: 'Fabio Palacios Resume',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Fabio German Palacios`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Full Stack Software Engineer</strong> based on Montreal, Canada. I have more
        than 10 years of experience in java related technologies, 4 years in scala and 5 years in Javascript (angular
        and ReactJs)
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Other experiences and interests include: Developments in financial management, software architecture and design,
        agile methodologies.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a driven engineer and entrepreneur who likes trying to solve big problems in innovative ways. I have applied these skills in both small and large companies, 
  including Avaya Inc, Thales Group (Ex Gemalto), having shipped multiple successful projects in both business and consumer-facing markets. 
  I have great experience in both Back end and Front end as full-stack web developer`,
  aboutItems: [
    {label: 'Location', text: 'Montreal, QC, Canada', Icon: MapIcon},
    {label: 'Nationality', text: 'Argentinian / Italian', Icon: FlagIcon},
    {label: 'Interests', text: 'Software Development, Engineering, Solar Energy, Astronomy', Icon: SparklesIcon},
    {label: 'Languages', text: 'English, Spanish', Icon: SpeakerphoneIcon},
    {label: 'Employment', text: 'Freelance', Icon: OfficeBuildingIcon},
    {label: 'Study', text: 'UTN (Universidad Tecnologica Nacional)', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Javascript',
        level: 10,
      },
      {
        name: 'AngularJs 1.x',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'Scala',
        level: 5,
      },
      {
        name: 'Node.js',
        level: 5,
      },
      {
        name: 'Mongo DB',
        level: 6,
      },
      {
        name: 'PostgreSQL',
        level: 8,
      },
      {
        name: 'MySQL',
        level: 5,
      },
      {
        name: 'Oracle DB',
        level: 5,
      },
      {
        name: 'Maria DB',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'TBD',
    url: 'https://www.linkedin.com/in/gfpalacios',
    image: porfolioImage1,
  },
  /* {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImageNational Technology University
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  }, */
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2013',
    location: 'UBA (Buenos Aires University)',
    title: 'Master in Engineering Entrepreneurship',
    content: <p></p>,
  },
  {
    date: 'December 2008',
    location: 'UTN (National Technological University - FRBA)',
    title: 'Information Systems Engineer',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2018 – - Present',
    location: 'MindGeek - Montreal, Canada',
    title: 'Senior Web Developer',
    content: (
      <>
        <ul>
          <li>
            &#8226; Developed new features for a web application in React which provide media content to millions of
            users from early stages. High traffic and SSR requirements.
          </li>
          <li>&#8226; Implemented new features and maintenance for an admin web site in React.</li>
          <li>
            &#8226; Participated in development tasks as core team member of one of the biggest areas of engineering in
            the company.
          </li>
          <li>
            &#8226; Designed and implemented a testing framework in Jest which accelerated 100% unit test development
            and 90% of code coverage.
          </li>
          <li>
            &#8226; Trained over 20 staff member in unit test for frontend, including steps on how to use Jest and
            Enzyme properly.
          </li>
        </ul>
        <p>
          <b>Technologies:</b> Javascript, React, Redux, Express, Jest, Enzyme.
        </p>
      </>
    ),
  },
  {
    date: 'May 2016 – January 2019',
    location: 'Qomplx Inc. - Virginia, USA',
    title: 'Senior Software Engineer / Scala Developer',
    content: (
      <ul>
        <li>
          &#8226; Developed rest api and backend features for a web solution which applies artificial intelligence to
          predict the stock market behavior, buy/sell stocks based on complex models and data analysis in real time.
          Scala, Play, Akka, Slick.
        </li>
        <li>
          &#8226; Developed new end to end features for a web application scala/vue.js to handle apache spark models.
        </li>
        <li>
          &#8226; Participated as full stack Scala Developer in the core web application development. Scala, liftweb,
          Squeryl, Spray, Akka.
        </li>
        <li>&#8226; Developed two UI editors to manage visual components into a Canvas. Javascript, Angular.</li>
        <li>
          &#8226; AWS Collector developed. A standalone process which consumes Amazon API to retrieve periodically
          pre-configured AWS instance data of the end user.
        </li>
        <li>&#8226; Modified and Updated Spring Social libraries to adapt them to the Fractal Business model.</li>
        <li>
          <b>Technologies:</b> Scala, liftweb, Squeryl, Slick, Play framework, Spray, Akka, MySql,MongoDB, Docker, AWS,
          Javascript, Angular, Java, Spring, Maven.
        </li>
      </ul>
    ),
  },
  {
    date: 'May 2012 – January 2018',
    location: 'Avaya Inc - Buenos Aires, Argentina',
    title: 'Senior Software Engineer',
    content: (
      <ul>
        <li>
          &#8226; Developed code to solve complex technical requirements related to a web administration tool which
          allows the creation and management of call flows easily and quickly.
        </li>
        <li>&#8226; Researched different JavaScript technologies focused on intuitive and user friendly interfaces.</li>
        <li> Developed a new reporting tool using ELK (Elasticsearch, Logstash and Kibana). &#8226;</li>
        <li>&#8226; Implemented Scala micro service. Designed and developed Java API Rest services.</li>
        <li>
          &#8226; Wrote Code to add new functionality to a Social Media Manager product that integrates Avaya contact
          center with different social networks like Facebook, Twitter, YouTube, etc.
        </li>
        <li>
          &#8226; Researched and developed BI application to build tabular reports, dashboards and maintenance of call
          flows generator application that allows contact center managers make decisions.
        </li>
        <li>
          &#8226; Created automation test, integration test, load and stress test for web based and BI applications.
        </li>
        <li>&#8226; Performed continuous improvement, continuous integration, and continuous inspection activities.</li>
        <li>&#8226; Participated in Agile development process. Multicultural teams.</li>
        <li>&#8226; Wrote scripts in Linux based platforms in order to setup, maintain and optimize environments.</li>
        <li>&#8226; Managed systems configuration, virtual machines and test system environments.</li>
        <li>&#8226; Provided support to internal and external customers for complex technical issues.</li>
        <li>&#8226; Organized sessions which helped in knowledge transfer across the team and internal customers.</li>
        <li>&#8226; Documented user guides and tutorials.</li>
        <li>
          <b>Technologies:</b> Java, JavaScript, Groovy, Scala, Angular, Jquery, Backbone.js, Joint.js, ElasticSearch,
          Logstash, Kibana, Bootstrap, Bower, Karma, Jasmine, HTML, CSS, Hibernate, Maven, Spring, GWT, Echo2,
          SpringMVC, Oracle BI (OBIEE 11g), Oracle DB, PostgreSQL, Graphviz, Talend, SVN, Git, Jira, Nexus, Bamboo,
          Sonar, Crucible.
        </li>
      </ul>
    ),
  },
  {
    date: 'January 2009 – May 2012',
    location: 'Gemalto - Buenos Aires, Argentina',
    title: 'Senior Software Developer',
    content: (
      <ul>
        <li>
          &#8226; Designed architecture and implemented web application to build banking transaction reports to every
          Mexican citizen. Validated scalability, performance criteria and security vulnerabilities.
        </li>
        <li>&#8226; Coached and mentored a team about 3 people. Prepared Technical classes and tutorials.</li>
        <li>&#8226; Developed SIMCard related software projects for Latam customers. Interacted among abroad teams.</li>
        <li>&#8226; Generated new reusable components based on refactors over existent code.</li>
        <li>&#8226; Developed gateway to manage STKML pages based on banking transactions.</li>
        <li>
          &#8226; Created new type of transactions in Gemalto mobile banking product requested by external customers.
        </li>
        <li>&#8226; Implemented web services in different SOA architectures.</li>
        <li>&#8226; Participated in the integration of cross-organization development.</li>
        <li>
          &#8226; Created performance measurement instrumentation used to observe application and infrastructure
          performance across application servers.
        </li>
        <li>&#8226; Involved in continuous improvement and continuous integration processes.</li>
        <li>&#8226; Promoted agile practices. Participated in the first agile development in the area.</li>
        <li>&#8226; Created user guides through LaTex programming. Documented tutorials in wiki pages.</li>
        <li>&#8226; Presenter in knowledge transfer meetings.</li>
        <li>&#8226; Conducting technical interviews.</li>
        <li>&#8226; International experience.</li>

        <li>
          <b>Technologies:</b> Scala, liftweb, Squeryl, Slick, Play framework, Spray, Akka, MySql,MongoDB, Docker, AWS,
          Javascript, Angular, Java, Spring, Maven.
        </li>
      </ul>
    ),
  },
  {
    date: 'September 2008 – December 2008',
    location: 'Capgemini - Buenos Aires, Argentina',
    title: 'Software Developer',
    content: (
      <ul>
        <li>
          &#8226; Redesigned and refactored a piece of web platform to generate balance sheets reports and
contacts management of an important Bank in Spain.
        </li>
        <li>&#8226; Interacted professionally with a diverse group of stakeholders including customers and
managers.</li>
        <li>&#8226;Coached a small team as technical leader.</li>

        <li>
          <b>Technologies:</b> Java, Struts, JSP, HTML, CSS, JavaScript, WebSphere, and Oracle DB.
        </li>
      </ul>
    ),
  },
  {
    date: 'February 2007 – September 2008',
    location: 'Snoop Consulting - Buenos Aires, Argentina',
    title: 'Java Developer',
    content: (
      <ul>
        <li>
          &#8226; Developed java web applications for Nextel international company related to manage its
call center.
        </li>
        <li>
          &#8226; Wrote batch process in order to handle thousands of data records involved in a migration
project. Researched a variety of performance measurement tools.
        </li>
        <li>
          &#8226; Monitored application performance, traced transaction with diagnostic tools to detect,
isolate, and resolve performance issues.
        </li>
        <li>
          &#8226; Researched and implemented SOA architecture. Solid experience in web services.
        </li>
        <li>
          &#8226; Developed web application for MasterCard Argentina related to bill management and
transactions made by phone charges.
        </li>

        <li>
          <b>Technologies:</b>  Java, JavaScript, Groovy, GWT, Struts, JSP, JSF, Tiles, CSS, HTML,
Hibernate, Spring, Maven, Axis, web services, SOAP, Dozer, Acegi, JXLS, JDBC, OC4J,
WebSphere, Oracle, DB2.
        </li>
      </ul>
    ),
  },
  
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'Have a project for me? I would love to hear from you, give me a shout by email or by using the form below if you would like to get in contact with me.',
  items: [
    {
      type: ContactType.Email,
      text: 'gfpalacios@gmail.com',
      href: 'mailto:gfpalacios@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Montreal, QC, Canada',
      href: 'https://www.google.ca/maps/place/Montreal,+QC/@45.5590971,-73.8519554,11z/data=!3m1!4b1!4m5!3m4!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5018869!4d-73.5673919',
    },
    {
      type: ContactType.Github,
      text: 'gfpalacios',
      href: 'https://github.com/gfpalacios',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/gfpalacios'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/6377918/german-palacios'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/gfpalacios'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/gfpalacios'},
];
