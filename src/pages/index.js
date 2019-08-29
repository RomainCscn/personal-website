import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Homepage" />
        <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}>
          Je suis <strong>Romain Cascino</strong>, ingénieur en informatique et
          développeur web. Freelance et actuellement basé à Nantes.
        </h2>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
