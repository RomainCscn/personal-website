import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Description from '../components/description';
import Skills from '../components/skills';
import Hobbies from '../components/hobbies';
import { ThemeContext } from '../context/theme';
import { THEME } from '../styles/theme';

const i18n = {
  description: (
    <div>
      <p>
        My name is Romain Cascino, I'm a software engineer specialized in web
        development. I got my degree in 2017 and joined MyScript at Nantes where
        I worked as a web developer, in charge of the{' '}
        <a className='external-link' href='https://github.com/MyScript'>
          front-end librairies
        </a>{' '}
        as well as the{' '}
        <a className='external-link' href='https://webdemo.myscript.com'>
          webdemo
        </a>
        .
      </p>
      <p>
        {' '}
        In august 2018, I traveled to South-East Asia during a solo trip, to
        take time for myself and live new experiences.{' '}
      </p>
      <p className='mt-2'>
        I went back to Nantes in january 2019 to work on
        <Link className='internal-link' to='/projects'>
          {' '}
          my projects
        </Link>{' '}
        and to start my freelance activity as a web developer. On a part-time
        basis, I assist and lead students on the OpenClassrooms'{' '}
        <a
          className='external-link'
          href='https://openclassrooms.com/fr/paths/48-developpeur-web-junior'>
          web development course
        </a>{' '}
        .
      </p>
      <p className='mt-2'>
        From October 2019 to December 2020, I built the new billing system of
        TheFork (Tripadvisor) using Node.js microservices and frontend
        interfaces in React.
      </p>
      <p>
        Since January 2021, I'm working at Swile as a full stack Senior Software
        Engineer, with several missions related to the project{' '}
        <a href='https://www.swile.co/en/solutions/insights'>Insights</a>.
      </p>
    </div>
  ),
  resume: {
    text: 'My resume',
    cv: false,
  },
  skillsTitle: 'Technical skills',
  softSkillsTitle: 'What people like about me',
  softSkills: [
    'My priority management',
    'My adaptability',
    'My curiosity',
    'My empathy',
    'My attention to details',
    'My appeal for design',
  ],
  spareTimeTitle: 'In my spare time',
  spareTime: (
    <div>
      <p className='mb-2'>
        I like to read on various subjects (philosophy, science, ecology,
        psychology, digital, etc.) in order to deepen my knowledge and open
        myself to new subjects. I take the time to create and work on personal
        projects.
      </p>
      <p>
        When I can, I like to go hiking, camping and immersing myself in the
        wilderness. I also enjoy cooking, alone or for my friends.
      </p>
    </div>
  ),
};

const About = (props) => {
  const { colorMode } = React.useContext(ThemeContext);
  const theme = THEME[colorMode] || THEME.light;

  const data = useStaticQuery(graphql`
    query {
      profil: file(absolutePath: { regex: "/profile.jpeg/" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hobbies: file(absolutePath: { regex: "/hobbies.png/" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout lang='en' location={props.location} theme={theme}>
      <SEO title='About me' />
      <div className={`mb-16 ${theme.primaryText}`}>
        <h2 className='serif text-4xl'>About me</h2>
        <p className='serif italic text-lg'>
          My story, my skills, my interests
        </p>
      </div>
      <Description
        i18n={i18n}
        image={data.profil.childImageSharp.fluid}
        theme={theme}
      />
      <Skills i18n={i18n} theme={theme} />
      <Hobbies
        i18n={i18n}
        image={data.hobbies.childImageSharp.fluid}
        theme={theme}
      />
    </Layout>
  );
};

export default About;
