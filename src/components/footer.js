import React from 'react';
import { Link } from 'gatsby';
import cv from '../../content/assets/cv.pdf';

import rcLogo from '../../content/assets/images/logo/rc_logo_light.svg';

const NavLink = props => {
  return (
    <Link
      className={`${props.className} text-gray-400 my-2 sm:my-0 sm:mr-8`}
      to={props.link}>
      {props.title}
    </Link>
  );
};

const Footer = props => {
  return (
    <footer className='bg-gray-800 mt-16 px-2 py-12 text-gray-100'>
      <div className='container mx-auto'>
        <Link to={props.i18n.homeLink}>
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
            {props.i18n.resume}
          </a>
        </div>
        <div className='flex flex-col sm:flex-row my-8'>
          <NavLink
            title={props.i18n.aboutTitle}
            link={props.i18n.aboutLink}></NavLink>
          <NavLink
            title={props.i18n.projectsTitle}
            link={props.i18n.projectsLink}></NavLink>
          <NavLink
            title={props.i18n.blogTitle}
            link={props.i18n.blogLink}></NavLink>
        </div>
        <div className='text-gray-500'>
          Copyright Romain Cascino {new Date().getFullYear()} ©
        </div>
      </div>
    </footer>
  );
};

export default Footer;
