import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Blog from '../components/blog';
import { ThemeContext } from '../context/theme';
import { THEME } from '../styles/theme';

const i18n = {
  allArticles: 'All articles',
  title: 'Articles',
  readMore: 'Read more',
};

const BlogIndex = ({ data, location }) => {
  const { colorMode } = React.useContext(ThemeContext);
  const theme = THEME[colorMode] || THEME.light;

  return (
    <Layout lang='en' location={location} theme={theme}>
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
