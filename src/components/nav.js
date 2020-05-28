import React, { useState } from 'react';
import { Link } from 'gatsby';

import ThemeToggle from './theme-toggle';

import rcLogo from '../../content/assets/images/logo/rc_logo.svg';
import rcLogoLight from '../../content/assets/images/logo/rc_logo_light.svg';

const NavLink = ({ link, title, theme }) => {
  return (
    <Link
      activeClassName={theme.activeNav}
      className={`font-semibold my-2 sm:my-0 sm:mr-8 ${theme.secondaryText}`}
      to={link}>
      {title}
    </Link>
  );
};

const Nav = ({ i18n, theme }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className='sm:flex sm:items-center sm:justify-between py-12 mb-8'>
      <div className='flex items-center justify-between'>
        <Link to={i18n.homeLink}>
          <img
            className='w-16'
            src={theme.logo === 'light' ? rcLogoLight : rcLogo}
            alt='RC Logo'></img>
        </Link>
        <div
          role='button'
          tabIndex={0}
          className={`block sm:hidden float-right cursor-pointer mt-1 text-xl font-bold ${theme.secondaryText}`}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          onKeyPress={() => setShowMobileMenu(!showMobileMenu)}>
          Menu
        </div>
      </div>
      <div
        className={`${
          showMobileMenu ? 'flex' : 'hidden'
        } flex-col items-center text-2xl mt-6 sm:block sm:float-right sm:text-lg sm:mt-0`}>
        <NavLink title={i18n.aboutTitle} link={i18n.aboutLink} theme={theme} />
        <NavLink
          title={i18n.projectsTitle}
          link={i18n.projectsLink}
          theme={theme}
        />
        <NavLink title={i18n.blogTitle} link={i18n.blogLink} theme={theme} />
        <Link className='my-2 sm:my-0 sm:mr-8' to={i18n.flagLink}>
          <span role='img' aria-label={i18n.emoji}>
            {i18n.flag}
          </span>
        </Link>
        <ThemeToggle theme={theme} />
      </div>
    </nav>
  );
};

export default Nav;
