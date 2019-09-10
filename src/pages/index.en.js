import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Available from '../components/available';
import Project from '../components/project';

import projects from '../data/projects.json';

const i18n = {
  hello: "Hi, I'm Romain Cascino ",
  introduction: (
    <div>
      <h2 className='text-2xl font-semibold'>
        French software engineer specialized in{' '}
        <span className='font-bold text-indigo-600'>web development</span>.
      </h2>
      <h2 className='mt-4 text-xl font-semibold'>
        Currently based in Nantes (France) as a{' '}
        <span className='font-bold text-indigo-600'>freelancer</span>.
      </h2>
      <Link
        to='/about'
        className='float-right mt-6 bg-indigo-300 hover:bg-indigo-400 text-indigo-800 font-bold py-2 px-4 rounded'>
        More information
      </Link>
    </div>
  ),
  lastProject: 'My last project',
  allProjects: 'See all my projects',
};

const Home = props => {
  const data = useStaticQuery(graphql`
    query {
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
        {i18n.hello}
        <span role='img' aria-label='wave'>
          👋🏻
        </span>
      </div>
      <div className='flex flex-col items-center sm:flex-row sm:justify-center bg-white px-2 py-4 sm:p-4 rounded-lg shadow-custom mb-32'>
        <Image
          className='w-1/3 mb-6 sm:mb-0 sm:w-1/6 mx-12 max-w-md'
          fluid={data.memoji.childImageSharp.fluid}
        />
        {i18n.introduction}
      </div>
      <div className='flex flex-col items-center lg:block mb-32'>
        <div className='sm:flex sm:flex-row justify-between sm:items-center mb-6'>
          <h3 className='serif italic text-2xl sm:mr-12 lg:mr-0'>
            {i18n.lastProject}
          </h3>
          <Link
            to='/projects'
            className='hidden sm:inline-block bg-indigo-300 hover:bg-indigo-400 text-indigo-800 font-bold py-2 px-4 rounded'>
            {i18n.allProjects}
          </Link>
        </div>
        <Project
          key={projects[0].nameEn}
          name={projects[0].nameEn}
          startDate={projects[0].startDateEn}
          endDate={projects[0].endDateEn}
          description={projects[0].descriptionEn}
          link={projects[0].link}
          github={projects[0].github}
          location={projects[0].location}
          tags={projects[0].tags}
          image={data.project.childImageSharp.fluid}
          lang='en'></Project>
        <Link
          to='/projects'
          className='inline-block sm:hidden bg-indigo-300 hover:bg-indigo-400 text-indigo-800 font-bold mr-2 py-2 px-4 rounded'>
          {i18n.allProjects}
        </Link>
      </div>
      <Available lang='en' />
    </Layout>
  );
};

export default Home;
