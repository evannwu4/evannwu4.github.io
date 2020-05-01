import React from 'react'
import Layout from '../components/layout'
import ProjectItem from '../components/projectItem'
import projectsStyle from '../styles/projects.module.scss'
import profile from '../resources/img/github_square_black.png'


const ProjectPage = () => {
    return (
        <Layout>
            <h1>Projects</h1>
            <ProjectItem>
                <img src={profile} alt="" className={projectsStyle.projectItemThumbnail} />
                <h3 className={projectsStyle.projectItemText}>
                        Michael Kronovet, Anoop Bhat, Andrew Smith, Evann Wu, and I created the Quantum ML program for Hack The Universe. The premise of the competition was to combine physics and computer science in an interesting and novel way. Our program simulates the evolution of a randomly-generated many body quantum mechanical system. We use a neural network structure that finds local energy minima by gradient descent of a given Hamiltonian (a potential energy function). This program is useful for people looking to study how different Hamiltonian functions affects the evolution of quantum states.

                        Core Technologies: Python, NumPy, MatPlotLib

                        Completed Feb. 2019                
                    </h3>
            </ProjectItem>
            <ProjectItem>
                <img src={profile} alt="" className={projectsStyle.projectItemThumbnail} />
                <h3 className={projectsStyle.projectItemText}>
                    Michael Kronovet, Ka Chun Cheung, Evann Wu, and I created the Automated-Logo-Generator for HackCMU. The goal was to create a program that took an image and generated a “logo” version of the main object in the image. We used Adobe Illustrator’s Javascript API to perform the image manipulation and we also used Microsoft Azure to identify the main object as well as associated words/themes to generate a more effective logo. 

                    Core Technologies: Javascript, Microsoft Azure, Adobe Illustrator, AppleScript

                    Completed Sep. 2018            
                </h3>
            </ProjectItem>
            <ProjectItem>
                <img src={profile} alt="" className={projectsStyle.projectItemThumbnail} />
                <h3 className={projectsStyle.projectItemText}>
                    GunAR was a project intending to replicate laser tag in a portable fashion. The experience involved a gun with a phone holster and a interfacing app on the user’s phone. When the trigger on the gun was pressed, it would send a signal to the phone, prompting the phone’s camera to take a picture and analyze if a player had been shot. For a more in-depth explanation, check the Github!

                    Core Technologies: Swift, Raspberry Pi, Javascript

                    Completed Jan. 2018         
                </h3>
            </ProjectItem>
            <ProjectItem>
                <img src={profile} alt="" className={projectsStyle.projectItemThumbnail} />
                <h3 className={projectsStyle.projectItemText}>
                    Professor Doppleganger is a project that takes a picture of someone’s face as input and finds the CMU professor that looks most similar to them. It uses the Microsoft Azure Face API. The program sends a request to Microsoft Azure with the input image. Then it takes the results and compares it to all CMU professors and generates a score based on similarity. It then returns the image of the professor with the highest score.

                    Core Technologies: Python, Microsoft Azure, Django, Json

                    Completed Feb. 2018       
                </h3>
            </ProjectItem>

        </Layout>
    )
}

export default ProjectPage