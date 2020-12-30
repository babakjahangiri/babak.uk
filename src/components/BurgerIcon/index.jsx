import React, { useContext } from 'react'
import { ToggleBurgerContext } from './../../context'
import './burger-icon.scss'

const BurgerIcon = () => {
    const [burgerStatus, setBurgerStatus] = useContext(ToggleBurgerContext)

    const handleCheckbox = () => {
        if (burgerStatus) {
            setBurgerStatus(false)
            // toggleBurger(burgerStatus);
        } else {
            setBurgerStatus(true)
            //toggleBurger(burgerStatus);
        }
    }

    return (
        <div id="burger" className="burger-icon">
            <input type="checkbox" onClick={() => handleCheckbox()} />
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default BurgerIcon
