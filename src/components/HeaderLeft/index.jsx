import React from 'react'
import { useLocation } from 'react-router-dom'
import './header-left.scss'
import { NavLink } from 'react-router-dom'
import { Menu } from './../../components'
import logo from './../../images/logo.svg'
import { motion } from 'framer-motion'

const HeaderLeft = () => {
    let location = useLocation().pathname
    return (
        <div className="header__leftContainer">
            <div className="header__leftone">
                <div className="logonav__container">
                    <div className="logo__container">
                        <NavLink to="/" exact>
                            <motion.p
                                initial={{ y: '-100vh' }}
                                animate={{ y: 0 }}
                                transition={{
                                    type: 'spring',
                                    duration: 2,
                                    stiffness: 80,
                                }}
                            >
                                <img
                                    src={logo}
                                    alt="BABAK.UK logo"
                                    className="logo"
                                />
                            </motion.p>
                        </NavLink>
                    </div>
                    <Menu></Menu>
                </div>
            </div>
            <div className="header__lefttwo">
                {!(location === '/') && <div></div>}
                <div>
                    <div className="header__left-downblock"></div>
                </div>
            </div>
        </div>
    )
}

export default HeaderLeft
