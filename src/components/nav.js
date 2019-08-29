import React, { useState } from 'react';
import { Link } from 'gatsby';

const NavLink = props => {
  return (
    <Link
      className={`${props.className}`}
      style={{
        ...props.style,
        boxShadow: `none`,
        textDecoration: `none`,
        color: `inherit`,
        marginRight: '12px',
      }}
      to={props.link}
    >
      {props.title}
    </Link>
  );
};

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav
      style={{
        marginBottom: '32px',
      }}
    >
      <NavLink title="Romain Cascino" link="/" className="font-bold"></NavLink>
      <div
        className="block sm:hidden float-right cursor-pointer"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        Menu
      </div>
      <div
        className={`${
          showMobileMenu ? 'flex' : 'hidden'
        } flex-col items-center text-lg`}
      >
        <NavLink title="À propos" link="about"></NavLink>
        <NavLink title="Projets" link="projects"></NavLink>
        <NavLink title="Blog" link="blog"></NavLink>
        <NavLink title="Contact" link="contact"></NavLink>
      </div>
      <div className="hidden sm:block sm:float-right">
        <NavLink title="À propos" link="about"></NavLink>
        <NavLink title="Projets" link="projects"></NavLink>
        <NavLink title="Blog" link="blog"></NavLink>
        <NavLink title="Contact" link="contact"></NavLink>
      </div>
    </nav>
  );
};

export default Nav;
