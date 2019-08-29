import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Project from '../components/project';

import projects from '../data/projects.json';

class Projects extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Projets et expériences" />
        <h2 className="text-xl">Projets et expériences</h2>
        <p>Présentation de mes projets et de mes précédentes expériences.</p>
        {projects.map(project => (
          <Project
            name={project.name}
            startDate={project.startDate}
            endDate={project.endDate}
            description={project.description}
            link={project.link}
            github={project.github}
            location={project.location}
          ></Project>
        ))}
      </Layout>
    );
  }
}

export default Projects;
