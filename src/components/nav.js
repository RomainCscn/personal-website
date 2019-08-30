import React, { useState } from 'react';
import { Link } from 'gatsby';

const NavLink = props => {
  return (
    <Link
      activeClassName='active-nav'
      className={`${props.className} font-semibold text-gray-600 mr-8`}
      to={props.link}>
      {props.title}
    </Link>
  );
};

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className='py-12 mb-8'>
      <NavLink
        className='text-xl text-gray-800 font-bold'
        title='Romain Cascino'
        link='/'></NavLink>
      <div
        className='block sm:hidden float-right cursor-pointer'
        onClick={() => setShowMobileMenu(!showMobileMenu)}>
        Menu
      </div>
      <div
        className={`${
          showMobileMenu ? 'flex' : 'hidden'
        } flex-col items-center text-lg sm:block sm:float-right`}>
        <NavLink title='À propos' link='/about'></NavLink>
        <NavLink title='Projets' link='/projects'></NavLink>
        <NavLink title='Blog' link='/blog'></NavLink>
        <NavLink title='Contact' link='/contact'></NavLink>
      </div>
    </nav>
  );
};

export default Nav;
