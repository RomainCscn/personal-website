import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { ThemeContext } from '../context/theme';
import { THEME } from '../styles/theme';

const BlogIndex = (props) => {
  const { colorMode } = React.useContext(ThemeContext);
  const theme = THEME[colorMode] || THEME.light;

  return (
    <Layout lang='en' location={props.location} theme={theme}>
      <SEO title='All articles' />
      <div className={`mb-12 ${theme.primaryText}`}>
        <h2 className='serif text-4xl'>Articles</h2>
        <p className='serif italic text-lg'>Articles and essays to come</p>
      </div>
    </Layout>
  );
};

export default BlogIndex;
