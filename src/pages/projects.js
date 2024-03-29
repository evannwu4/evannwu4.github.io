import React from 'react'
import Layout from '../components/layout'
import projectsStyle from '../styles/projects.module.scss'

const ProjectPage = () => {
    return (
        <Layout>
            <h1 className={projectsStyle.title}>projects</h1>
            <div className={projectsStyle.projectItem}>
                <a className={projectsStyle.projectAnchor} href="https://github.com/Mochael/Automated-Logo-Generator" target="_blank">
                <img src="../../github_square_black.png" alt="" className={projectsStyle.projectItemThumbnail} />
                </a> 
                <h3 className={projectsStyle.projectItemText}>
                    <h2 className={projectsStyle.projectTitle}> Automated Logo Generator </h2> 
                    Michael Kronovet, Ka Chun Cheung, Tanishq Kancharla, and I created the Automated-Logo-Generator for HackCMU. The goal was to create a program that took an image and generated a “logo” version of the main object in the image. We used Adobe Illustrator’s Javascript API to perform the image manipulation and we also used Microsoft Azure to identify the main object as well as associated words/themes to generate a more effective logo. 
                    <br/>
                    <h3 className={projectsStyle.projectTech}>
                    Core Technologies: Javascript, Microsoft Azure, Adobe Illustrator, AppleScript
                    </h3>
                    <h3 className={projectsStyle.projectDate}>
                    Completed Sep. 2018            
                    </h3>
                </h3>
            </div>
            <div className={projectsStyle.projectItem}>
                <a className={projectsStyle.projectAnchor} href="https://github.com/Mochael/ProfessorDoppleganger" target="_blank">
                <img src="../../github_square_black.png" alt="" className={projectsStyle.projectItemThumbnail} />
                </a>
                <h3 className={projectsStyle.projectItemText}>
                    <h2 className={projectsStyle.projectTitle}> Professor Doppleganger </h2> 
                    Professor Doppleganger is a project that takes a picture of someone’s face as input and finds the CMU professor that looks most similar to them. It uses the Microsoft Azure Face API. The program sends a request to Microsoft Azure with the input image. Then it takes the results and compares it to all CMU professors and generates a score based on similarity. It then returns the image of the professor with the highest score.
                    <br/>
                    <h3 className={projectsStyle.projectTech}>
                    Core Technologies: Python, Microsoft Azure, Django, JSON
                    </h3>
                    <h3 className={projectsStyle.projectDate}>
                    Completed Feb. 2018  
                    </h3>     
                </h3>
            </div>
            <div className={projectsStyle.projectItem}>
                <a className={projectsStyle.projectAnchor} href="https://github.com/tklightningfast/GunAR" target="_blank">
                <img src="../../github_square_black.png" alt="" className={projectsStyle.projectItemThumbnail} />
                </a>
                <h3 className={projectsStyle.projectItemText}>
                    <h2 className={projectsStyle.projectTitle}> GunAR </h2> 
                    GunAR was a project intending to replicate laser tag in a portable fashion. The experience involved a gun with a phone holster and a interfacing app on the user’s phone. When the trigger on the gun was pressed, it would send a signal to the phone, prompting the phone’s camera to take a picture and analyze if a player had been shot. For a more in-depth explanation, check the Github!
                    <br/>
                    <h3 className={projectsStyle.projectTech}>
                    Core Technologies: Swift, Raspberry Pi, Javascript
                    </h3>
                    <h3 className={projectsStyle.projectDate}>
                    Completed Jan. 2018  
                    </h3>       
                </h3>
            </div>

        </Layout>
    )
}


export default ProjectPage