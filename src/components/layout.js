import React from 'react';

import Nav from './nav';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className='container mx-auto px-4'>
        <Nav />
        <main>{children}</main>
        <footer className='mt-16'>
          © {new Date().getFullYear()} Romain Cascino. Site créé avec
          {` `}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>.
        </footer>
      </div>
    );
  }
}

export default Layout;
