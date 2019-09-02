import React from 'react';
import { Link } from 'gatsby';
import cv from '../../content/assets/cv.pdf';

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
  return (
    <footer className='bg-gray-800 mt-16 px-2 py-12 text-gray-100'>
      <div className='container mx-auto'>
        <div className='text-2xl'>Romain Cascino</div>
        <div className='flex flex-col sm:flex-row'>
          <a
            className='text-green-400 sm:mr-4'
            href='mailto:contact@romaincascino.com'>
            contact@romaincascino.com
          </a>
          <a
            className='text-green-400 sm:mr-4'
            href='https://github.com/romaincscn'>
            Github
          </a>
          <a
            className='text-green-400 sm:mr-4'
            href='https://www.linkedin.com/in/romaincascino/'>
            LinkedIn
          </a>
          <a className='text-green-400 sm:mr-4' href={cv}>
            Mon CV
          </a>
        </div>
        <div className='flex flex-col sm:flex-row my-6'>
          <NavLink title='À propos' link='/about'></NavLink>
          <NavLink title='Projets' link='/projects'></NavLink>
          <NavLink title='Blog' link='/blog'></NavLink>
        </div>
        <div className='text-gray-500'>
          Copyright Romain Cascino {new Date().getFullYear()} ©
        </div>
      </div>
    </footer>
  );
};

export default Footer;
