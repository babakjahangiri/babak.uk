import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="footer__left">
                <div>
                    <ul className="footer__menu">
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
                </div>
                <div className="footer__social-block">
                    <a
                        href="https://www.linkedin.com/in/babak-jhn/"
                        title="Github"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>

                    <a href="https://github.com/babakjahangiri" title="Github">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://dribbble.com/Babak-uk" title="Dribble">
                        <i className="fab fa-dribbble"></i>
                    </a>

                    <a
                        href="https://www.instagram.com/babak_uk/"
                        title="Github"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            <div className="footer__right">
                <p>&#169; 2020-2021 BABAK.UK </p>
                <div className="footer__down-block"> </div>
            </div>
        </footer>
    )
}

export default Footer
