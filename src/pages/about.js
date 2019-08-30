import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import cv from '../../content/assets/cv.pdf';

const CV = () => (
  <a
    href={cv}
    target='_blank'
    class='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>
    <svg
      class='fill-current w-4 h-4 mr-2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'>
      <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
    </svg>
    <span>Télécharger mon CV</span>
  </a>
);

class About extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title='À propos' />
        <h2 className='text-xl'>À propos</h2>
        <p>
          Des phrases à propos de moi qui font sens (ce qui n'est pas le cas
          pour l'instant...).
        </p>
        <CV />
      </Layout>
    );
  }
}

export default About;
