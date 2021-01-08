import React from 'react'
import { Header, Projects } from './../../components'

const ProjectsPage = () => {
    return (
        <React.Fragment>
            <Header />

            <div className="full-section">
                <p>
                    {' '}
                    To demonstrate my knowledge and skills, I published some of
                    my previous projects on{' '}
                    <a href="https://github.com/babakjahangiri">Github</a>.
                    However, you can filter projects based on technology which I
                    used in. Live demo for some projects is available.
                </p>
            </div>
            <Projects />
        </React.Fragment>
    )
}

export default ProjectsPage
