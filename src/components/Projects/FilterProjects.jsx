import React from 'react'

const FilterProjects = ({ tags, handleTagsRemove, handleSetClear }) => {
    return (
        <ul className="filter-projects">
            <li key="">All</li>
            <li>HTML,CSS</li>
            <li>React.js</li>
            <li>Vanilla Javascript</li>
            <li>Node.js</li>
        </ul>
    )
}

export default FilterProjects
