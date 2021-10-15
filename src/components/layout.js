import React from 'react'
import Header from './header'
import Footer from './footer'
import layoutStyles from '../styles/layout.module.scss'


const Layout = (props) => {
    return (
        <div className={layoutStyles.main}>
            <div className={layoutStyles.spiff}>
                <div className={layoutStyles.headerContent}>
                    <Header />
                </div>
            </div>
            <div className={layoutStyles.container}>
                <div className={layoutStyles.content}>
                    {props.children}
                </div>
                
            </div>
            <div className={layoutStyles.footerContent}>
                <Footer />
            </div>
            
        </div>
    )
}

export default Layout