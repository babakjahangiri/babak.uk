import React from 'react'
import Project from './Project'

const ProjectsList = ({ projectsData }) => {
    return (
        <div className="projects-list">
            {projectsData.map((project) => (
                <Project key={project.id} project={project} />
            ))}
        </div>
    )
}

export default ProjectsList
