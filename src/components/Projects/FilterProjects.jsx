import React, { useContext } from 'react'
import { ProjectsFilterContext } from './../../context'

const FilterProjects = () => {
    const [projectFilter, setProjectFilter] = useContext(ProjectsFilterContext)

    const handleSelectedFilter = (filter) => {
        setProjectFilter(filter)
    }
    return (
        <ul className="filter-projects">
            <li
                key="all"
                onClick={() => handleSelectedFilter('all')}
                className={projectFilter === 'all' ? 'selected-filter' : ''}
            >
                All
            </li>
            <li
                key="html-css"
                onClick={() => handleSelectedFilter('html-css')}
                className={
                    projectFilter === 'html-css' ? 'selected-filter' : ''
                }
            >
                HTML,CSS
            </li>
            <li
                key="react"
                onClick={() => handleSelectedFilter('react')}
                className={projectFilter === 'react' ? 'selected-filter' : ''}
            >
                React.js
            </li>
            <li
                key="js"
                onClick={() => handleSelectedFilter('js')}
                className={projectFilter === 'js' ? 'selected-filter' : ''}
            >
                Vanilla Javascript
            </li>
            <li
                key="node"
                onClick={() => handleSelectedFilter('node')}
                className={projectFilter === 'node' ? 'selected-filter' : ''}
            >
                Node.js
            </li>
        </ul>
    )
}

export default FilterProjects
