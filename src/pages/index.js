import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Available from '../components/available';
import Project from '../components/project';

import projects from '../data/projects.json';

const Home = props => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      project: file(absolutePath: { regex: "/educulture.png/" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout location={props.location}>
      <SEO title='Accueil' />
      <div className='mb-24'>
        <div className='hello-box relative bg-indigo-600 inline-block mb-4 p-2 rounded text-white'>
          Bonjour, je suis Romain Cascino <span role='img'>👋🏻</span>
        </div>
        <h2 className='text-2xl font-semibold'>
          Ingénieur en informatique spécialisé dans le{' '}
          <span className='font-bold text-green-600'>développement web</span>.
          <br />
          Actuellement en{' '}
          <span className='font-bold text-green-600'>freelance</span> et basé à
          Nantes.
        </h2>
        <div className='mt-10 mb-32'>
          <h3 className='serif italic text-xl mb-4'>
            Vous souhaitez en savoir plus ? Retrouvez :
          </h3>
          <Link to='/about' className='underline-custom font-semibold text-xl'>
            Mon histoire, mes compétences et mes intérêts.
          </Link>
        </div>
      </div>
      <div className='mb-32'>
        <h3 className='serif italic text-2xl mb-4'>Mon dernier projet</h3>
        <Project
          key={projects[0].name}
          name={projects[0].name}
          startDate={projects[0].startDate}
          endDate={projects[0].endDate}
          description={projects[0].description}
          link={projects[0].link}
          github={projects[0].github}
          location={projects[0].location}
          tags={projects[0].tags}
          image={data.project.childImageSharp.fluid}></Project>
        <Link
          to='/projects'
          className='bg-green-300 hover:bg-green-400 text-green-800 font-bold mr-2 py-2 px-4 rounded'>
          En voir plus
        </Link>
      </div>
      <Available />
    </Layout>
  );
};

export default Home;
