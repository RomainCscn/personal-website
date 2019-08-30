import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class Home extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='Homepage' />
        <h2 className='text-xl'>
          Je suis <span className='font-bold'>Romain Cascino</span>, ingénieur
          en informatique spécialisé dans le{' '}
          <span className='font-bold text-green-600'>développement web</span>.
          Actuellement en{' '}
          <span className='font-bold text-green-600'>freelance</span> et basé à
          Nantes.
        </h2>
      </Layout>
    );
  }
}

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
