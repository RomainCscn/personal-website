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
        Je m'appelle Romain Cascino et je suis ingénieur en informatique,
        spécialisé dans le développement web full stack. Diplômé en 2017, j'ai
        rejoins MyScript, à Nantes, en tant que développeur web responsable des{' '}
        <a className='external-link' href='https://github.com/MyScript'>
          librairies front-end
        </a>{' '}
        et des{' '}
        <a className='external-link' href='https://webdemo.myscript.com'>
          webdemo
        </a>
        .
      </p>
      <p>
        {' '}
        En août 2018, je suis parti en Asie du Sud-Est lors d'un voyage en
        solitaire, pour prendre du temps et vivre de nouvelles expériences.{' '}
      </p>
      <p className='mt-2'>
        Je reviens m'installer à Nantes en janvier 2019 afin de travailler sur
        <Link className='internal-link' to='/projects'>
          {' '}
          mes projets
        </Link>{' '}
        et de commencer mon activité de développeur web en freelance. À temps
        partiel, je supervise et j'accompagne des étudiants sur le{' '}
        <a
          className='external-link'
          href='https://openclassrooms.com/fr/paths/48-developpeur-web-junior'>
          parcours développement web
        </a>{' '}
        de la plateforme OpenClassrooms.
      </p>
      <p className='mt-2'>
        D'octobre 2019 à décembre 2020, j'ai développé le nouveau service de
        facturation de TheFork (Tripadvisor), avec l'implémentation de
        micro-services en Node.js et d'un front-end en React.
      </p>
      <p className='mt-2'>
        Depuis Janvier 2021, je travaille chez Swile en tant que Full Stack
        Engineer, sur de nombreuses missions liées à{' '}
        <a href='https://www.swile.co/en/solutions/insights'>
          la partie Insights
        </a>
        .
      </p>
    </div>
  ),
  resume: {
    text: 'Mon CV',
    cv: true,
  },
  skillsTitle: 'Compétences techniques',
  softSkillsTitle: "Ce qu'on apprécie chez moi",
  softSkills: [
    'Ma gestion des priorités',
    'Mon adaptabilité',
    'Ma curiosité',
    'Mon empathie',
    'Mon sens du détail',
    'Mon attrait pour le design',
  ],
  spareTimeTitle: 'Dans mon temps libre',
  spareTime: (
    <div>
      <p className='mb-2'>
        J'aime lire sur des sujets variés (philosophie, sciences, écologie,
        psychologie, numérique, etc.) afin d'approfondir mes connaissances et
        m'ouvrir à de nouveaux sujets. Je prends le temps de créer et de
        travailler sur des projets personnels.
      </p>
      <p>
        Quand je le peux, j'aime partir randonner, camper et m'immerger en
        pleine nature. J'apprécie également cuisiner, seul ou pour mes amis.
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
    <Layout lang='fr' location={props.location} theme={theme}>
      <SEO title='À propos' />
      <div className={`mb-16 ${theme.primaryText}`}>
        <h2 className='serif text-4xl'>À propos</h2>
        <p className='serif italic text-lg'>
          Mon histoire, mes compétences, mes intérêts
        </p>
      </div>
      <Description
        theme={theme}
        i18n={i18n}
        image={data.profil.childImageSharp.fluid}
      />
      <Skills theme={theme} i18n={i18n} />
      <Hobbies
        theme={theme}
        i18n={i18n}
        image={data.hobbies.childImageSharp.fluid}
      />
    </Layout>
  );
};

export default About;
