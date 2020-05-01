import React from 'react'
import Header from './header'
import Footer from './footer'
import layoutStyles from '../styles/layout.module.scss'


const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.headerContent}>
                <Header />
            </div>
            <div className={layoutStyles.content}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout