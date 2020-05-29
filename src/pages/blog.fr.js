import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Blog from '../components/blog';
import { ThemeContext } from '../context/theme';
import { THEME } from '../styles/theme';

const i18n = {
  allArticles: 'Tous les articles',
  title: 'Articles',
  subTitle: 'Seulement disponibles en anglais',
  readMore: 'En lire plus',
};

const BlogIndex = ({ data, location }) => {
  const { colorMode } = React.useContext(ThemeContext);
  const theme = THEME[colorMode] || THEME.light;

  return (
    <Layout lang='fr' location={location} theme={theme}>
      <Blog i18n={i18n} theme={theme} data={data} />
    </Layout>
  );
};

export default BlogIndex;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
