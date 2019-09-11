import React from 'react';

import Nav from './nav';
import Footer from './footer';

const i18n = {
  en: {
    aboutTitle: 'About',
    projectsTitle: 'Projects',
    blogTitle: 'Blog',
    homeLink: '/en/',
    aboutLink: '/en/about',
    projectsLink: '/en/projects',
    blogLink: '/en/blog',
    flagLink: '/',
    flag: '🇫🇷',
    emoji: 'fr',
    resume: 'My resume',
  },
  fr: {
    aboutTitle: 'À propos',
    projectsTitle: 'Projets',
    blogTitle: 'Blog',
    homeLink: '/',
    aboutLink: '/about',
    projectsLink: '/projects',
    blogLink: '/blog',
    flagLink: '/en/',
    flag: '🇺🇸',
    emoji: 'us',
    resume: 'Mon CV',
  },
};

const Layout = props => {
  const { children, lang } = props;

  return (
    <div>
      <div className='container mx-auto px-4'>
        <Nav i18n={i18n[lang]} />
        <main>{children}</main>
      </div>
      <Footer i18n={i18n[lang]} />
    </div>
  );
};

export default Layout;
