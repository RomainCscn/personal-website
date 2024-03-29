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
    <Layout lang='en' location={props.location} theme={theme}>
      <SEO title='Personal projects' />
      <div className={`mb-16 ${theme.primaryText}`}>
        <h2 className='serif text-4xl'>Personal projects</h2>
        <p className='serif italic'>
          The personal projects I've been working on lately
        </p>
      </div>
      <div className='flex flex-col items-center'>
        {projects.map((project) => {
          console.log(project);
          console.log(imagesData);
          const image = imagesData.images.edges.find((img) => {
            return img.node.childImageSharp.fluid.src.includes(
              project.imageName
            );
          });
          return (
            <Project
              key={project.nameEn}
              name={project.nameEn}
              startDate={project.startDateEn}
              endDate={project.endDateEn}
              description={project.descriptionEn}
              link={project.link}
              github={project.github}
              location={project.locationEn}
              tags={project.tags}
              objectFit={project.objectFit}
              image={image?.node.childImageSharp.fluid}
              theme={theme}
              lang='en'></Project>
          );
        })}
      </div>
    </Layout>
  );
};

export default Projects;
