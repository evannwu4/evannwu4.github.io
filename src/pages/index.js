import React from 'react'
import Layout from '../components/layout'
import indexStyles from '../styles/index.module.scss'
import '../styles/index.css'

const IndexPage = () => {
    return (
        <Layout>
            <div className={indexStyles.helloText}>
                Hi! I'm Evann 🙋‍♂️
            </div>
            <div className={indexStyles.introText}>
                I'm a software engineer currently based in Washington DC, where I work on Google Search.
                I graduated from Carnegie Mellon University in 2021 with a bachelor's in computer engineering.
            </div>
            <br></br>
            <div className={indexStyles.introText}>
                In my free time, I enjoy volleyball, hiking, and reading. You can read about what I've been up to in my personal blog.
            </div>
            <br></br>
            <div className={indexStyles.introText}>
                Feel free to reach out to me at evannjwu@gmail.com!
            </div>
            {/* <div className={indexStyles.photoIntro}>
            <img className={indexStyles.profileImg} src="../../profile.jpg" alt="" />

            </div> */}
            {/* <h2 className={indexStyles.headingElement}>
                About Me
            </h2>

            <h3 className={indexStyles.hobbyElement}>
                In my free time I enjoy playing tennis, swimming, and basketball. I love the outdoors and some of my favorite activities are hiking, camping, and kayaking.
                I am an avid participant of a CMU sport called buggy. If you don’t know anything about buggy here’s a cool <a className={indexStyles.link} href="https://www.youtube.com/watch?v=j0TpeSgX4u0">clip</a> of one of our races. I am a veteran mechanic on the team and work primarily on design, manufacturing, and optimization of buggies.
            </h3>
            <img
                className={indexStyles.buggyImg}
                src="../../buggy.jpg"
                alt=""
            /> */}
        </Layout>
    )
}



export default IndexPage
