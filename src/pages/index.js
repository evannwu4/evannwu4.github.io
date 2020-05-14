import React from 'react'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import indexStyles from '../styles/index.module.scss'
import '../styles/index.css'

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <div className={indexStyles.photoIntro}>
            <img className={indexStyles.profileImg} src="../../profile.jpg" alt="" />
        
            </div>
            <div className={indexStyles.introTextGroup}>

                    <h3 className={indexStyles.introText}>
                        I am a third-year undergraduate student studying electrical and computer engineering at Carnegie Mellon University. I have a strong interest in systems and software engineering and at CMU, I have pursued my interest through courses such as Embedded Systems (18-349), Computer Security (15-330), and Algorithms (15-210). My professional experience thus far has been software engineering internships at General Electric and IBM along with an incoming internship at Microsoft. If you are a recruiter interested in learning more about my work, check out my <a href="../../resume.pdf">resume</a>.
                    </h3>
                </div>

            <h2>
                Hobbies and Personal Interests
            </h2>
            <h3 className={indexStyles.hobbyElement}>
                In my free time I enjoy playing tennis, swimming, and basketball. I love the outdoors and some of my favorite activities are hiking, camping, and kayaking. 
            </h3>
            <h3 className={indexStyles.hobbyElement}>
                I am an avid participant of a CMU sport called buggy. If you don’t know anything about buggy here’s a cool <a href="https://www.youtube.com/watch?v=j0TpeSgX4u0">clip</a> of one of our races. I am a veteran mechanic on the team and work primarily on design, manufacturing, and optimization of buggies. 
            </h3>
            <img
                className={indexStyles.buggyImg}
                src="../../buggy.jpg"
                alt=""
            />
        </Layout>
    )
}



export default IndexPage