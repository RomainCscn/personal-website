import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/project';

import projects from '../data/projects.json';

const Projects = props => {
  const imagesData = useStaticQuery(graphql`
    query Projects {
      images: allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 300) {
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
      <SEO title="Projets et expériences" />
      <h2 className="text-xl">Projets et expériences</h2>
      <p>Présentation de mes projets et de mes précédentes expériences.</p>
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
            image={image.node.childImageSharp.fluid}
          ></Project>
        );
      })}
    </Layout>
  );
};

export default Projects;
