import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PageNotFound = props => {
  const data = useStaticQuery(graphql`
    query PageNotFoundQuery {
      notfound: file(absolutePath: { regex: "/notfound.png/" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const isEnglish = window.location.pathname.includes('/en/');

  return (
    <Layout location={props.location}>
      <SEO title={isEnglish ? 'Page not found' : 'Page non trouvée'} />
      <div className='mb-12'>
        <h2 className='serif text-4xl'>
          {isEnglish ? 'Page not found' : 'Page non trouvée'}
        </h2>
        <p className='serif italic text-lg'>
          {isEnglish
            ? 'Oops... please check the url and try again'
            : "Oops... veuillez vérifier l'url et réessayer"}
        </p>
      </div>
      <Image
        className='mx-auto w-full sm:w-3/4 md:w-1/2'
        fluid={data.notfound.childImageSharp.fluid}
      />
    </Layout>
  );
};

export default PageNotFound;
