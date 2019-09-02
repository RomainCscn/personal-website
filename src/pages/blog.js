import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogIndex = props => {
  const data = useStaticQuery(graphql`
    query blogQuery {
      progress: file(absolutePath: { regex: "/progress.png/" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Layout location={props.location}>
      <SEO title='Tous les articles' />
      <div className='mb-12'>
        <h2 className='serif text-4xl'>Articles</h2>
        <p className='serif italic text-lg'>Articles et essais à venir</p>
      </div>
      <Image
        className='w-full sm:w-2/3 lg:w-1/2 mx-auto'
        fluid={data.progress.childImageSharp.fluid}
      />
    </Layout>
  );
};

export default BlogIndex;
