import React from 'react'
import './PageHeaderRight.scss'
import { motion } from 'framer-motion'
import aboutImg from './../../images/about.jpg'
import contactImg from './../../images/contact.jpg'
import projectsImg from './../../images/projects.jpg'
import solutionsImg from './../../images/solutions.jpg'

const PageHeaderRight = ({ title }) => {
    let headerImg = { src: '', alt: '' }
    switch (title.toLowerCase()) {
        case 'about':
            headerImg = { src: aboutImg, alt: 'Babak Jahangiri' }
            break
        case 'contact':
            headerImg = { src: contactImg, alt: 'Contact' }
            break
        case 'projects':
            headerImg = { src: projectsImg, alt: 'Projects' }
            break
        case 'solutions':
            headerImg = { src: solutionsImg, alt: 'Solutions' }
            break
        default:
            headerImg = { src: aboutImg, alt: 'Babak' }
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
                    src={headerImg.src}
                    alt={headerImg.alt}
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
