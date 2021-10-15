// Menu.js
import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import headerStyles from '../styles/header.module.scss'
import { Link } from 'gatsby'


export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: white;
  height: 10em;
  text-align: left;
  padding: 1.5rem;
  position: fixed;
  top: 7.8em;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  width: 30vw;
  list-style-type: none;
  z-index: 1;
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">projects</Link>
      </li>
      <li>
          <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} href="../../resume.pdf" target="_blank">resume</a>
      </li>
      <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">blog</Link>
      </li>
    </StyledMenu>
  )
}
Menu.propTypes = {
    open: bool.isRequired,
}
export default Menu;