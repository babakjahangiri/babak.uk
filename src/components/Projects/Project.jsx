import React from 'react'
import GlobeIcon from './../../images/globe-icon.svg'
import GithubIcon from './../../images/github-icon.svg'

const Project = ({ project }) => {
    return (
        <article className="project-row">
            <div>
                <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                />
            </div>
            <div className="project-info">
                <div>
                    <p className="project-name">{project.name}</p>
                    <p className="project-desc">{project.desc}</p>
                    <ul className="project-technologies">
                        {project.technologies.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <div className="project-urls">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Source Code
                            <img
                                src={GithubIcon}
                                alt="github"
                                className="github-icon"
                            />
                        </a>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live Demo{' '}
                            <img
                                src={GlobeIcon}
                                alt="globe"
                                className="globe-icon"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Project
