import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Description from '../components/description';
import Skills from '../components/skills';
import Hobbies from '../components/hobbies';
import cv from '../../content/assets/cv.pdf';

const CV = props => (
  <a
    href={cv}
    className={`${props.className} bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}>
    <svg
      className='fill-current w-4 h-4 mr-2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'>
      <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
    </svg>
    <span>Télécharger mon CV</span>
  </a>
);

const About = props => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      profil: file(absolutePath: { regex: "/profile.jpeg/" }) {
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
      <div className='mb-12'>
        <h2 className='font-bold text-4xl'>À propos</h2>
        <p className='italic'>Mon histoire, mes compétences, mes intérêts</p>
      </div>
      <Description image={data.profil.childImageSharp.fluid} />
      <Skills />
      <Hobbies />
      <p>
        Actuellement disponible pour de nouveaux projets en tant que freelance.
      </p>
      <CV />
    </Layout>
  );
};

export default About;
