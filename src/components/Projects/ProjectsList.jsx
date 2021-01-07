import React, { useContext } from 'react'
import Project from './Project'
import { ProjectsFilterContext } from './../../context'

const ProjectsList = ({ projectsData }) => {
    const [projectFilter] = useContext(ProjectsFilterContext)
    return (
        <div className="projects-list">
            <p></p>
            {projectsData
                .filter((project) => {
                    if (projectFilter !== 'all') {
                        return project.tags.includes(projectFilter)
                    } else {
                        return project
                    }
                })
                .sort((a, b) => (a.order < b.order ? 1 : -1))
                .map((project) => (
                    <Project key={project.id} project={project} />
                ))}
        </div>
    )
}

export default ProjectsList
