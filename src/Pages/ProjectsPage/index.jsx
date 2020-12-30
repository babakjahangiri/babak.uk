import React from 'react'
import { Header } from './../../components'

const ProjectsPage = () => {
    return (
        <React.Fragment>
            <Header />
            <h1>This Page is under construction</h1>
            <div>
                <p>
                    {' '}
                    To demonstrate my knowledge and skills, I published some of
                    my previous projects on{' '}
                    <a href="https://github.com/babakjahangiri">Github</a>.
                    However, you can filter projects based on technology which I
                    used in. Live demo for some projects is available.
                </p>
            </div>
            <div>
                <h2>Technologies :</h2>
                <ul>
                    <li>All</li>
                    <li>HTML,CSS</li>
                    <li>React.js</li>
                    <li>Vanilla Javascript</li>
                    <li>Node.js</li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default ProjectsPage
