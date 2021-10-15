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
    const animate = false
    const isBrowser = () => typeof window !== "undefined"
    if (isBrowser()) {
        const pathname = isBrowser() && window.location.pathname
        animate = pathname == "/"
    }
    
    if (animate)
    {
        return (
            <header className={headerStyles.headerOrg}>
                <div className={headerStyles.textMain}>
                    <h1 className={headerStyles.headerFormat}>
                        <Link className={headerStyles.title} activeClassName={headerStyles.activeTitle} to="/">
                            <div className={headerStyles.e}>e</div>
                            <div>vann wu</div>
                        </Link>
                    </h1>
                    <nav>
                        <ul className={headerStyles.navList}>
                            <li>
                                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">projects</Link>
                            </li>
                            <li>
                                <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} href="../../resume.pdf">resume</a>
                            </li>
                            <li>
                                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">blog</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={headerStyles.iconsList}>
                    <a className={headerStyles.iconAnchor} href="https://github.com/evannwu4"><img src="../../githubIcon.svg" alt="" className={headerStyles.icon} /></a>
                    <a className={headerStyles.iconAnchor} href="https://www.linkedin.com/in/evannwu/"><img src="../../linkedinIcon.png" alt="" className={headerStyles.icon} /></a>
                    <a className={headerStyles.iconAnchor} href="https://medium.com/@evannwu_15820"><img src="../../mediumIcon.png" alt="" className={headerStyles.icon} /></a>
                </div>
                <Menu open={open} />
                <HamburgerMenu
                    className={headerStyles.hamburgerButton}
                    isOpen={open}
                    menuClicked={toggleHamburger}
                    width={30}
                    height={30}
                    strokeWidth={1}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.5}
                />
            </header>

        )
    } 
    else
    {
        return (
            <header className={headerStyles.headerOrgNoAni}>
                <div className={headerStyles.textMain}>
                    <h1 className={headerStyles.headerFormat}>
                        <Link className={headerStyles.title} activeClassName={headerStyles.activeTitle} to="/">
                            <div className={headerStyles.eNoAni}>e</div>
                            <div>vann wu</div>
                        </Link>
                    </h1>
                    <nav>
                        <ul className={headerStyles.navList}>
                            <li>
                                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">projects</Link>
                            </li>
                            <li>
                                <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} href="../../resume.pdf">resume</a>
                            </li>
                            <li>
                                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">blog</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={headerStyles.iconsList}>
                    <a className={headerStyles.iconAnchor} href="https://github.com/evannwu4"><img src="../../githubIcon.svg" alt="" className={headerStyles.icon} /></a>
                    <a className={headerStyles.iconAnchor} href="https://www.linkedin.com/in/evannwu/"><img src="../../linkedinIcon.png" alt="" className={headerStyles.icon} /></a>
                    <a className={headerStyles.iconAnchor} href="https://medium.com/@evannwu_15820"><img src="../../mediumIcon.png" alt="" className={headerStyles.icon} /></a>
                </div>
                <Menu open={open} />
                <HamburgerMenu
                    className={headerStyles.hamburgerButton}
                    isOpen={open}
                    menuClicked={toggleHamburger}
                    width={30}
                    height={30}
                    strokeWidth={1}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.5}
                />
            </header>

        )
    }
}

export default Header