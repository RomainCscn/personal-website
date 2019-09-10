import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Description from '../components/description';
import Skills from '../components/skills';
import Hobbies from '../components/hobbies';
import Available from '../components/available';

const i18n = {
  description: (
    <p>
      Je m'appelle Romain Cascino et je suis ingénieur en informatique,
      spécialisé dans le développement web. J'ai obtenu mon diplôme en 2017 et
      j'ai rejoins MyScript, à Nantes, en tant que développeur web responsable
      des{' '}
      <a className='external-link' href='https://github.com/MyScript'>
        librairies front-end
      </a>{' '}
      et des{' '}
      <a className='external-link' href='https://webdemo.myscript.com'>
        webdemo
      </a>
      . En août 2018, je suis parti en Asie du Sud-Est lors d'un voyage en
      solitaire, pour prendre du temps et vivre de nouvelles expériences. <br />
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
    </p>
  ),
  resume: 'Mon CV',
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

const About = props => {
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
    <Layout location={props.location}>
      <SEO title='À propos' />
      <div className='mb-16'>
        <h2 className='serif text-4xl'>À propos</h2>
        <p className='serif italic text-lg'>
          Mon histoire, mes compétences, mes intérêts
        </p>
      </div>
      <Description i18n={i18n} image={data.profil.childImageSharp.fluid} />
      <Skills i18n={i18n} />
      <Hobbies i18n={i18n} image={data.hobbies.childImageSharp.fluid} />
      <Available lang='fr' />
    </Layout>
  );
};

export default About;