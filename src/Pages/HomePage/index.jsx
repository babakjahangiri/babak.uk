import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Header } from './../../components'
import './homepage.scss'
import './../../scss/utils.scss'

import IntroPic from './../../images/gray-typewriter.png'
import frontendPic from './../../images/frontend.png'
import backendPic from './../../images/backend.png'

const HomePage = () => {
    return (
        <React.Fragment>
            <Header />
            <section className="section__intro">
                <div>
                    <div className="section__intro-block"></div>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        Babak's web design sets you apart
                    </motion.h2>
                    <motion.p initial={{ x: -300 }} style={{ x: 0 }}>
                        An elegant design is not only about the appearance and
                        how does your website looks. One of the aspects of a
                        good design is to make a useful product that builds a
                        good relationship with your customers. It has to satisfy
                        certain criteria, not only functional but also
                        psychological and aesthetic. I offer simple website
                        design with a minimalist approach.
                    </motion.p>
                </div>
                <motion.div initial={{ x: 1000 }}>
                    <img src={IntroPic} alt="type writer machine" />
                </motion.div>
            </section>

            <section className="section-container">
                <div className="section-title-container">
                    <motion.p> Frontend</motion.p>
                    <div>&nbsp;</div>
                    <motion.h3>Frontend Design</motion.h3>
                </div>
                <div className="section-content-container">
                    <motion.div>
                        <img src={frontendPic} alt="Frontend design" />
                    </motion.div>
                    <motion.div
                        initial={{ x: 500 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring' }}
                    >
                        <p>
                            Frontend design involves creating the HTML, CSS and
                            presentational JavaScript code that makes up a user
                            interface. The frontend design would involve the
                            process of UI design and UI development. Wireframe
                            &amp; mockup must be done before the development
                            process.
                        </p>
                        <div>
                            <NavLink
                                className="readmore-btn"
                                to="/solutions"
                                exact
                            >
                                &#62;
                            </NavLink>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="section-container">
                <div className="section-title-container">
                    <motion.p initial={{ x: -300 }} animate={{ x: 0 }}>
                        Back-end
                    </motion.p>
                    <div>&nbsp;</div>
                    <motion.h3>Backend API</motion.h3>
                </div>
                <div className="section-content-container">
                    <motion.div initial={{ x: -500 }} animate={{ x: 0 }}>
                        <img src={backendPic} alt="Backend API Development" />
                    </motion.div>
                    <motion.div
                        initial={{ x: 500 }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring' }}
                    >
                        <p>
                            Back-end is the engine of your website, it's
                            machinery behind the scene. Backend may be
                            responsible for fetching raw data from the database,
                            then operate, order or organize them and send to the
                            frontend.Backend programming is focused on
                            database,scripting and architecture of websites.
                        </p>
                        <div>
                            <NavLink
                                className="readmore-btn"
                                to="/solutions"
                                exact
                            >
                                &#62;
                            </NavLink>
                        </div>
                    </motion.div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default HomePage
