import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/project';

import projects from '../data/projects.json';

const Projects = props => {
  const imagesData = useStaticQuery(graphql`
    query Projects {
      images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 450) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout location={props.location}>
      <SEO title='Projets et expériences' />
      <div className='mb-16'>
        <h2 className='serif text-4xl'>Projets personnels</h2>
        <p className='serif italic'>
          Retrouvez les projets personnels sur lesquels j'ai travaillé ces
          derniers temps.
        </p>
      </div>
      {projects.map(project => {
        const image = imagesData.images.edges.find(img => {
          return img.node.childImageSharp.fluid.src.includes(project.imageName);
        });
        return (
          <Project
            key={project.name}
            name={project.name}
            startDate={project.startDate}
            endDate={project.endDate}
            description={project.description}
            link={project.link}
            github={project.github}
            location={project.location}
            tags={project.tags}
            image={image.node.childImageSharp.fluid}></Project>
        );
      })}
    </Layout>
  );
};

export default Projects;
