import React, { useState } from 'react'
import { Link } from 'gatsby'
import headerStyles from '../styles/header.module.scss'
import HamburgerMenu from 'react-hamburger-menu';
import Menu from '../components/menu'


const Header = () => {
    const [open, setOpen] = useState(false);
    const toggleHamburger = () => {
        setOpen(!open);
      };
    return (
        <header className={headerStyles.headerOrg}>
            <div className={headerStyles.iconsList}>
                <a className={headerStyles.iconAnchor} href="https://github.com/evannwu4"><img src="../../githubIcon.svg" alt="" className={headerStyles.icon} /></a>
                <a className={headerStyles.iconAnchor} href="https://www.linkedin.com/in/evannwu/"><img src="../../linkedinIcon.png" alt="" className={headerStyles.icon} /></a>
                <a className={headerStyles.iconAnchor} href="https://medium.com/@evannwu_15820"><img src="../../mediumIcon.png" alt="" className={headerStyles.icon} /></a>
            </div>
            <HamburgerMenu
                className={headerStyles.hamburgerButton}
                isOpen={open}
                menuClicked={toggleHamburger}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
            />
            <Menu open={open}/>
            <div className={headerStyles.textMain}>
                <h1 className={headerStyles.headerFormat}>
                    <Link className={headerStyles.title} activeClassName={headerStyles.activeTitle} to="/">
                        EVANN WU
                    </Link>
                </h1>
                <nav>
                    <ul className={headerStyles.navList}>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">Projects</Link>
                        </li>
                        <li>
                            <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} href="../../resume.pdf">Resume</a>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                        </li>
                        {/* <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/dataViz">Data Visualization</Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
            
        </header>

    )
}

export default Header