import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

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
      memoji: file(absolutePath: { regex: "/memoji.png/" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Layout location={props.location}>
      <SEO title='Accueil' />
      <div className='hello-box relative bg-indigo-600 inline-block mb-4 mt-12 p-2 rounded-lg text-white text-lg'>
        Bonjour, je suis Romain Cascino{' '}
        <span role='img' aria-label='wave'>
          👋🏻
        </span>
      </div>
      <div className='flex flex-col items-center sm:flex-row sm:justify-center bg-white px-2 py-4 sm:p-4 rounded-lg shadow-custom mb-32'>
        <Image
          className='w-1/3 mb-6 sm:mb-0 sm:w-1/6 mx-12'
          fluid={data.memoji.childImageSharp.fluid}
        />
        <div>
          <h2 className='text-2xl font-semibold'>
            Ingénieur en informatique spécialisé dans le{' '}
            <span className='font-bold text-indigo-600'>développement web</span>
            .
          </h2>
          <h2 className='mt-4 text-xl font-semibold'>
            Actuellement basé à Nantes en{' '}
            <span className='font-bold text-indigo-600'>freelance</span>.
          </h2>
          <Link
            to='/about'
            className='float-right mt-6 bg-indigo-300 hover:bg-indigo-400 text-indigo-800 font-bold py-2 px-4 rounded'>
            En savoir plus
          </Link>
        </div>
      </div>
      <div className='flex flex-col items-center lg:block mb-32'>
        <div className='sm:flex sm:flex-row justify-between sm:items-center mb-6'>
          <h3 className='serif italic text-2xl sm:mr-12 lg:mr-0'>
            Mon dernier projet
          </h3>
          <Link
            to='/projects'
            className='hidden sm:inline-block bg-indigo-300 hover:bg-indigo-400 text-indigo-800 font-bold py-2 px-4 rounded'>
            Voir tous mes projets
          </Link>
        </div>
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
          className='inline-block sm:hidden bg-indigo-300 hover:bg-indigo-400 text-indigo-800 font-bold mr-2 py-2 px-4 rounded'>
          Voir tous les projets
        </Link>
      </div>
      <Available />
    </Layout>
  );
};

export default Home;
