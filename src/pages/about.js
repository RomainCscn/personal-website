import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

class About extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="À propos" />
        <h2 className="text-xl">À propos</h2>
        <p>
          Des phrases à propos de moi qui font sens (ce qui n'est pas le cas
          pour l'instant...).
        </p>
      </Layout>
    );
  }
}

export default About;
