import React from 'react'
import { Fragment } from 'react'
import Skills from './../Skills/'

const AboutMe = () => {
    return (
        <Fragment>
            <section className="full-section">
                <h2 className="m-title">Babak Jahangiri</h2>
                <p>
                    A seasoned web developer with over 10 years experience,
                    moved into full-stack development in the last year. I
                    graduated in Software engineering (Bachelor of Science) from{' '}
                    {''}
                    <a
                        href="http://www.apu.edu.my/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Asia Pacific University
                    </a>
                    {''} in 2013. In July 2020, I have finished studying web
                    design &amp; development (PG Certificate) at{' '}
                    <a
                        href="http://www.bbk.ac.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Birkbeck University of London
                    </a>{' '}
                    simultaneously, I attended a training course at{' '}
                    <a
                        href="https://codeyourfuture.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        "Code Your Future"
                    </a>
                    .
                </p>
                <p>
                    I am more kin in web application development, especially,
                    CRUD based APIs &amp; E-Commerce applications. Due to
                    COVID-19 pandemic, I start to learn new technologies to
                    become more proficient in on-demand web technologies. The
                    selections of my projects are available with source codes
                    published on my{' '}
                    <a href="https://github.com/babakjahangiri">
                        GitHub account
                    </a>
                    .
                </p>
            </section>
            <section className="full-section">
                <h2 className="m-title">My Skills</h2>
                <Skills />
            </section>
        </Fragment>
    )
}

export default AboutMe
