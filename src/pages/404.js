import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { ThemeContext } from '../context/theme';
import { THEME } from '../styles/theme';

const PageNotFound = (props) => {
  const { colorMode } = React.useContext(ThemeContext);
  const theme = THEME[colorMode] || THEME.light;

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

  const [isEnglish, setIsEnglish] = useState(false);
  const [lang, setLang] = useState('fr');

  useEffect(() => {
    setIsEnglish(window.location.pathname.includes('/en/'));
    setLang(isEnglish ? 'en' : 'fr');
  }, [isEnglish, lang]);

  return (
    <Layout lang={lang} location={props.location} theme={theme}>
      <SEO title={isEnglish ? 'Page not found' : 'Page non trouvée'} />
      <div className={`mb-12 ${theme.primaryText}`}>
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
