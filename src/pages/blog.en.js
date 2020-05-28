import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { ThemeContext } from '../context/theme';
import { THEME } from '../styles/theme';

const BlogIndex = ({ data, location }) => {
  const { colorMode } = React.useContext(ThemeContext);
  const theme = THEME[colorMode] || THEME.light;

  return (
    <Layout lang='en' location={location} theme={theme}>
      <SEO title='All articles' />
      <div className={`mb-12 ${theme.primaryText}`}>
        <h2 className='serif text-4xl'>Articles</h2>
      </div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div
          key={node.id}
          className={`mb-12 px-2 py-4 sm:p-4 rounded-lg ${theme.primaryText} ${theme.primaryBg} ${theme.shadow}`}>
          <Link to={node.fields.slug} className='no-underline'>
            <h3 className='text-lg font-bold'>{node.frontmatter.title} </h3>
            <div className={`mb-6 ${theme.secondaryText}`}>
              {node.frontmatter.date}
            </div>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
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
