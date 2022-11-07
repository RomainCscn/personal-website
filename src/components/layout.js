import React from 'react';

import Nav from './nav';
import Footer from './footer';

const i18n = {
  en: {
    aboutTitle: 'About',
    projectsTitle: 'Projects',
    homeLink: '/en/',
    aboutLink: '/en/about',
    projectsLink: '/en/projects',
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
    homeLink: '/',
    aboutLink: '/about',
    projectsLink: '/projects',
    flagLink: '/en/',
    flag: '🇺🇸',
    emoji: 'us',
    resume: {
      text: 'Mon CV',
      cv: true,
    },
  },
};

const Layout = ({ children, mainClassName, lang, theme }) => (
  <>
    <div className='container mx-auto px-4'>
      <Nav i18n={i18n[lang]} theme={theme} />
      <main className={mainClassName}>{children}</main>
    </div>
    <Footer i18n={i18n[lang]} />
  </>
);

export default Layout;
