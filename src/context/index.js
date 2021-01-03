import React, { useState, createContext } from 'react'
export const ToggleBurgerContext = createContext()
export const ProjectsFilterContext = createContext()

export const ToggleBurgerProvider = (props) => {
    const [burgerStatus, setBurgerStatus] = useState(false)
    return (
        <ToggleBurgerContext.Provider value={[burgerStatus, setBurgerStatus]}>
            {props.children}
        </ToggleBurgerContext.Provider>
    )
}

export const ProjectsFilterProvider = (props) => {
    const [projectFilter, setProjectFilter] = useState('')
    return (
        <ProjectsFilterContext.Provider
            value={[projectFilter, setProjectFilter]}
        >
            {props.children}
        </ProjectsFilterContext.Provider>
    )
}
