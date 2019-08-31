import React from 'react';

import Nav from './nav';
import Footer from './footer';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <div className='container mx-auto px-4'>
          <Nav />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
