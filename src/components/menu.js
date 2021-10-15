// Menu.js
import React from 'react';
import { bool } from 'prop-types';
import headerStyles from '../styles/header.module.scss'
import { Link } from 'gatsby'

const Menu = ({ open }) => {
  if (open) {
    return (
      <div className={headerStyles.menu} open={open}>
        <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">projects</Link>
        </li>
        <li>
            <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} href="../../resume.pdf" target="_blank">resume</a>
        </li>
        <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">blog</Link>
        </li>
      </div>
    )
  } else {
    return (
      <div className={headerStyles.menuAway} open={open}>
        <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">projects</Link>
        </li>
        <li>
            <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} href="../../resume.pdf" target="_blank">resume</a>
        </li>
        <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">blog</Link>
        </li>
      </div>
    )
  }
  
}
Menu.propTypes = {
    open: bool.isRequired,
}
export default Menu;