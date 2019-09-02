import React, { useState } from 'react';
import { Link } from 'gatsby';

import rcLogo from '../../content/assets/images/logo/rc_logo.svg';

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
  return (
    <nav className='sm:flex sm:items-center sm:justify-between py-12 mb-8'>
      <div className='flex items-center justify-between'>
        <Link to='/'>
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
        <NavLink title='À propos' link='/about'></NavLink>
        <NavLink title='Projets' link='/projects'></NavLink>
        <NavLink title='Blog' link='/blog'></NavLink>
      </div>
    </nav>
  );
};

export default Nav;
