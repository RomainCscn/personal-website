import React from 'react';
import { Link } from 'gatsby';
import cv from '../../content/assets/cv.pdf';

import rcLogo from '../../content/assets/images/logo/rc_logo_light.svg';

const i18n = {
  en: {
    about: 'About',
    projects: 'Projects',
    blog: 'Blog',
    resume: 'My resume',
  },
  fr: {
    about: 'À propos',
    projects: 'Projets',
    blog: 'Blog',
    resume: 'Mon CV',
  },
};

const NavLink = props => {
  return (
    <Link
      className={`${props.className} text-gray-400 my-2 sm:my-0 sm:mr-8`}
      to={props.link}>
      {props.title}
    </Link>
  );
};

const Footer = () => {
  const isEnglish = window.location.pathname.includes('/en/');
  const lang = isEnglish ? 'en' : 'fr';
  return (
    <footer className='bg-gray-800 mt-16 px-2 py-12 text-gray-100'>
      <div className='container mx-auto'>
        <Link to={isEnglish ? '/en/' : '/'}>
          <img className='w-16 mb-4' src={rcLogo} alt='RC Logo'></img>
        </Link>
        <div className='flex flex-col sm:flex-row'>
          <a
            className='text-indigo-300 sm:mr-4'
            href='mailto:contact@romaincascino.com'>
            contact@romaincascino.com
          </a>
          <a
            className='text-indigo-300 sm:mr-4'
            href='https://github.com/romaincscn'>
            Github
          </a>
          <a
            className='text-indigo-300 sm:mr-4'
            href='https://www.linkedin.com/in/romaincascino/'>
            LinkedIn
          </a>
          <a className='text-indigo-300 sm:mr-4' href={cv}>
            {i18n[lang].resume}
          </a>
        </div>
        <div className='flex flex-col sm:flex-row my-8'>
          <NavLink
            title={i18n[lang].about}
            link={`${isEnglish ? '/en/' : '/'}about`}></NavLink>
          <NavLink
            title={i18n[lang].projects}
            link={`${isEnglish ? '/en/' : '/'}projects`}></NavLink>
          <NavLink
            title={i18n[lang].blog}
            link={`${isEnglish ? '/en/' : '/'}blog`}></NavLink>
        </div>
        <div className='text-gray-500'>
          Copyright Romain Cascino {new Date().getFullYear()} ©
        </div>
      </div>
    </footer>
  );
};

export default Footer;
