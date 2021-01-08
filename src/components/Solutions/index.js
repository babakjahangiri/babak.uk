import React from 'react'
import frontendPic from './../../images/frontend.png'
import backendPic from './../../images/backend.png'

const Solutions = () => {
    return (
        <div className="full-section">
            <h2 className="m-title">Front End Solutions</h2>
            <p>
                Frontend design involves creating the HTML, CSS and
                presentational JavaScript code that makes up a user interface.
                The frontend design involved the process of UI design and UI
                development. Wireframe & mockup must do before the development
                process. UI brings together concepts from interaction design,
                visual design, and information architecture. I can design
                application User Interfaces that focus on e-commerce design and
                data-driven applications with UI design tools such as Adobe XD
                and Figma. However, you could prepare the mockup design for me
                before starting the development process.
            </p>
            <p className="flex-table">
                <img
                    src={frontendPic}
                    alt="Frontend design"
                    className="img-content"
                />
            </p>

            <p>
                For the frontend development process, I used various tools &
                techniques. For the structure of each project will be built
                based on HTML and styled with CSS. I used different methods and
                solutions to applying CSS in your application like SCSS or
                StyleComponents. preferably, I would suggest React which is a
                library for building modern UI components and connecting an
                application to any API.
            </p>
            <div className="seprator-empty"></div>
            <h2 className="m-title">Backend Solutions</h2>
            <p>
                The back-end is the engine of your website, it's the machinery
                behind the scene. The backend may be responsible for fetching
                raw data from the database, then operate, order or organize them
                and send to the front-end. Backend programming is focused on the
                database, scripting and architecture of websites. API design
                refers to the process of developing application programming
                interfaces (APIs) that expose data and application functionality
                for use by developers and users.
            </p>
            <p className="flex-table">
                <img
                    src={backendPic}
                    alt="Backend design"
                    className="img-content"
                />
            </p>
            <p>
                An application program interface (API) is a set of routines,
                protocols, and tools for building software applications. APIs
                are important to modern organizations, adding new capabilities
                to everything from their operations and products to their
                partnership strategies. I offer API design with NodeJs
                technology which takes advantage of JavaScript in the backend.
                API is not a Database, although, I can empower the API by
                applying the database for storing users data. My solutions for
                using databases are MongoDB and Postgres, the first being a
                documented database, the other is a Relational.
            </p>
        </div>
    )
}

export default Solutions
