import React from 'react'
import projectItemStyle from '../styles/projectItem.module.scss'

const ProjectItem = (props) => {
    return (
        <div className={projectItemStyle.projectItem}>
            {props.children}
        </div>
    )
}

export default ProjectItem