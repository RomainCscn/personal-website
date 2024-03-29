import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/project';
import { ThemeContext } from '../context/theme';
import { THEME } from '../styles/theme';

import projects from '../data/projects.json';

const Projects = (props) => {
  const { colorMode } = React.useContext(ThemeContext);
  const theme = THEME[colorMode] || THEME.light;

  const imagesData = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { sourceInstanceName: { eq: "projects-images" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout lang='fr' location={props.location} theme={theme}>
      <SEO title='Projets personnels' />
      <div className={`mb-16 ${theme.primaryText}`}>
        <h2 className='serif text-4xl'>Projets personnels</h2>
        <p className='serif italic'>
          Les projets personnels sur lesquels j'ai travaillé ces derniers temps.
        </p>
      </div>
      <div className='flex flex-col items-center'>
        {projects.map((project) => {
          const image = imagesData.images.edges.find((img) => {
            return img.node.childImageSharp.fluid.src.includes(
              project.imageName
            );
          });
          return (
            <Project
              key={project.name}
              name={project.name}
              collaboration={project.collaboration}
              startDate={project.startDate}
              endDate={project.endDate}
              description={project.description}
              link={project.link}
              github={project.github}
              location={project.location}
              tags={project.tags}
              objectFit={project.objectFit}
              image={image?.node.childImageSharp.fluid}
              theme={theme}
              lang='fr'></Project>
          );
        })}
      </div>
    </Layout>
  );
};

export default Projects;
