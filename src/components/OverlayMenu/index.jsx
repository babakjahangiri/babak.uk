import React, { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ToggleBurgerContext } from './../../context'
import './overlay-menu.scss'

const OverlayMenu = () => {
    const [burgerStatus] = useContext(ToggleBurgerContext)
    const [menuClass, setMenuClass] = useState('')

    useEffect(() => {
        if (burgerStatus) {
            setMenuClass('overlay-menu-reveal')
        } else {
            setMenuClass('')
        }
    }, [burgerStatus])

    return (
        <div className={`overlay-menu ${menuClass}`}>
            <nav className="nav-hamburger">
                <ul>
                    <li>
                        <NavLink to="/about" exact>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" exact>
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/solutions" exact>
                            Solutions
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" exact>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default OverlayMenu
