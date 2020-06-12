import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { ThemeContext } from '../context/theme';
import { THEME } from '../styles/theme';

const BlogPostTemplate = ({ data, pageContext }) => {
  const { colorMode } = React.useContext(ThemeContext);
  const theme = THEME[colorMode] || THEME.light;

  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  const [lang, setLang] = useState('fr');

  useEffect(() => {
    setLang(window.location.pathname.includes('/en/') ? 'en' : 'fr');
  }, [lang]);

  return (
    <Layout mainClassName='max-w-screen-md mx-auto' lang={lang} theme={theme}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className={`mb-16 p-4 md:p-8 rounded-lg ${theme.shadow} ${theme.primaryBg} ${theme.primaryText}`}>
        <header>
          <h1 className='text-2xl sm:text-4xl font-bold'>
            {post.frontmatter.title}
          </h1>
          <p className={`mb-16 ${theme.secondaryText}`}>
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}>
          <li>
            {previous && (
              <Link
                className={theme.primaryText}
                to={previous.fields.slug}
                rel='prev'>
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                className={theme.primaryText}
                to={next.fields.slug}
                rel='next'>
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 240)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
