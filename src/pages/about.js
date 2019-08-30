import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Description from '../components/description';
import Skills from '../components/skills';
import Hobbies from '../components/hobbies';

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
      <div className='mb-12'>
        <h2 className='serif text-4xl'>À propos</h2>
        <p className='serif italic text-lg'>
          Mon histoire, mes compétences, mes intérêts
        </p>
      </div>
      <Description image={data.profil.childImageSharp.fluid} />
      <Skills />
      <Hobbies image={data.hobbies.childImageSharp.fluid} />
      <p>
        Actuellement disponible pour de nouveaux projets en tant que freelance.
      </p>
    </Layout>
  );
};

export default About;
