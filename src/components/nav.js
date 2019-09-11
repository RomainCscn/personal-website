import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import rcLogo from '../../content/assets/images/logo/rc_logo.svg';

const i18n = {
  en: {
    about: 'About',
    projects: 'Projects',
    blog: 'Blog',
  },
  fr: {
    about: 'À propos',
    projects: 'Projets',
    blog: 'Blog',
  },
};

const NavLink = props => {
  return (
    <Link
      activeClassName='active-nav'
      className={`${props.className} font-semibold text-gray-600 my-2 sm:my-0 sm:mr-8`}
      to={props.link}>
      {props.title}
    </Link>
  );
};

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [lang, setLang] = useState('fr');
  const [pathname, setPathname] = useState('');
  useEffect(() => {
    setIsEnglish(window.location.pathname.includes('/en/'));
    setLang(isEnglish ? 'en' : 'fr');
    setPathname(window.location.pathname);
  }, [isEnglish, lang]);
  return (
    <nav className='sm:flex sm:items-center sm:justify-between py-12 mb-8'>
      <div className='flex items-center justify-between'>
        <Link to={isEnglish ? '/en/' : '/'}>
          <img className='w-16' src={rcLogo} alt='RC Logo'></img>
        </Link>
        <div
          className='block sm:hidden float-right cursor-pointer mt-1 text-xl font-bold'
          onClick={() => setShowMobileMenu(!showMobileMenu)}>
          Menu
        </div>
      </div>
      <div
        className={`${
          showMobileMenu ? 'flex' : 'hidden'
        } flex-col items-center text-2xl mt-6 sm:block sm:float-right sm:text-lg sm:mt-0`}>
        <NavLink
          title={i18n[lang].about}
          link={`${isEnglish ? '/en/' : '/'}about`}></NavLink>
        <NavLink
          title={i18n[lang].projects}
          link={`${isEnglish ? '/en/' : '/'}projects`}></NavLink>
        <NavLink
          title={i18n[lang].blog}
          link={`${isEnglish ? '/en/' : '/'}blog`}></NavLink>
        <Link
          className={isEnglish ? 'initial' : 'hidden'}
          to={pathname.replace('/en', '')}>
          <span role='img' aria-label='fr'>
            🇫🇷
          </span>
        </Link>
        <Link
          className={isEnglish ? 'hidden' : 'initial'}
          to={`/en${pathname}`}>
          <span role='img' aria-label='us'>
            🇺🇸
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
