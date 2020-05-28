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
    resume: {
      text: 'My resume',
      cv: false,
    },
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
    resume: {
      text: 'Mon CV',
      cv: true,
    },
  },
};

const Layout = ({ children, lang, theme }) => (
  <>
    <div className='container mx-auto px-4'>
      <Nav i18n={i18n[lang]} theme={theme} />
      <main>{children}</main>
    </div>
    <Footer i18n={i18n[lang]} />
  </>
);

export default Layout;
