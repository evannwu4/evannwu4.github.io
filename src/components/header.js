import React from 'react'
import { Link } from 'gatsby'
import headerStyles from '../styles/header.module.scss'

const Header = () => {
    return (
        <header>
            <h1 className={headerStyles.headerFormat}>
                <Link className={headerStyles.title} activeClassName={headerStyles.activeTitle} to="/">
                    Evann Wu
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/projects">Projects</Link>
                    </li>
                    <li>
                        <a className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} href="../../resume.pdf">Resume</a>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/dataViz">Data Visualization</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header