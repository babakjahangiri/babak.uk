import React from 'react'
import './PageHeaderRight.scss'
import { motion } from 'framer-motion'
import aboutImg from './../../images/about.jpg'
import contactImg from './../../images/contact.jpg'
import projectsImg from './../../images/projects.jpg'
import solutionsImg from './../../images/solutions.jpg'

const PageHeaderRight = ({ title }) => {
    let headerImg = ''
    switch (title.toLowerCase()) {
        case 'about':
            headerImg = aboutImg
            break
        case 'contact':
            headerImg = contactImg
            break
        case 'projects':
            headerImg = projectsImg
            break
        case 'solutions':
            headerImg = solutionsImg
            break
        default:
            headerImg = projectsImg
            break
    }

    return (
        <motion.div
            className="pageheader__rightContainer"
            initial={{ opacity: -1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div>
                <img
                    src={headerImg}
                    alt="Babak Jahangiri"
                    className="pageheader-image"
                />
            </div>
            <div>
                <p>{title}</p>
                <div>
                    <p className="header__right-downblock"></p>
                </div>
            </div>
        </motion.div>
    )
}

export default PageHeaderRight
