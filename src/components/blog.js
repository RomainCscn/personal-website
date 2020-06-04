import React, { useState } from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';

const Article = ({ node, theme, i18n }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      key={node.id}
      className={`mb-12 px-2 py-4 sm:p-4 rounded-lg ${theme.primaryText} ${theme.primaryBg} ${theme.shadow}`}>
      <Link
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        to={node.fields.slug}
        className='no-underline'>
        <h3
          className={`text-3xl font-bold ${isHover && theme.indigoTextAccent}`}>
          {node.frontmatter.title}{' '}
        </h3>
        <div className={`mb-6 ${theme.secondaryText}`}>
          {node.frontmatter.date}
        </div>
        <p>{node.excerpt}</p>
        <p
          className={`font-bold mb-0 flex items-baseline ${
            isHover && theme.indigoTextAccent
          }`}>
          {i18n.readMore}
        </p>
      </Link>
    </div>
  );
};

const Blog = ({ data, i18n, theme }) => (
  <>
    <SEO title={i18n.allArticles} />
    <div className={`mb-12 ${theme.primaryText}`}>
      <h2 className='serif text-4xl'>{i18n.title}</h2>
      <p className='serif italic text-lg'>{i18n.subTitle}</p>
    </div>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Article node={node} theme={theme} i18n={i18n} />
    ))}
  </>
);

export default Blog;
