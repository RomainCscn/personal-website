import React, { useState } from 'react';
import { Link } from 'gatsby';

const NavLink = props => {
  return (
    <Link
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
      <NavLink
        title="Romain Cascino"
        link="/"
        style={{ fontWeight: 700, fontFamily: `Montserrat, sans-serif` }}
      ></NavLink>
      <div
        style={{ cursor: 'pointer', float: 'right' }}
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        Menu
      </div>
      <div
        style={{
          display: showMobileMenu ? 'flex' : 'none',
          background: 'white',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid',
          fontSize: 'larger',
        }}
      >
        <NavLink title="À propos" link="a-propos"></NavLink>
        <NavLink title="Projets" link="projets"></NavLink>
        <NavLink title="Blog" link="blog"></NavLink>
        <NavLink title="Contact" link="contact"></NavLink>
      </div>
      <div style={{ float: 'right' }}>
        <NavLink title="À propos" link="a-propos"></NavLink>
        <NavLink title="Projets" link="projets"></NavLink>
        <NavLink title="Blog" link="blog"></NavLink>
        <NavLink title="Contact" link="contact"></NavLink>
      </div>
    </nav>
  );
};

export default Nav;
