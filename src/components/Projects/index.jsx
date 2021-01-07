import React from 'react'
import FilterProjects from './FilterProjects'
import ProjectsList from './ProjectsList'
import { ProjectsFilterProvider } from './../../context'
import projectsData from './../../data/projects.json'
import './../../components/Projects/projects.scss'

const Projects = () => {
    return (
        <ProjectsFilterProvider>
            <section className="projects-container">
                <h3 className="s-title">Technologies :</h3>
                <FilterProjects />
                <ProjectsList projectsData={projectsData} />
            </section>
        </ProjectsFilterProvider>
    )
}

export default Projects
