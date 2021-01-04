import React from 'react'

const Project = ({ project }) => {
    return (
        <article className="project-row">
            <div>
                <img
                    src={project.image}
                    alt={project.name}
                    class="project-image"
                />
            </div>
            <div className="project-info">
                <div>
                    <p className="project-name">{project.name}</p>
                    <p className="project-name">{project.desc}</p>
                    <ul className="project-technologies">
                        <li>{project.technologies}</li>
                    </ul>
                </div>
                <div className="project-urls">
                    <p></p>
                    <p></p>
                </div>
            </div>
        </article>
    )
}

export default Project
