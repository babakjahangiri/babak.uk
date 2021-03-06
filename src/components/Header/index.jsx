import React from 'react'
import { useLocation } from 'react-router-dom'
import {
    HeaderMobile,
    HeaderLeft,
    HeaderRight,
    PageHeaderRight,
} from './../../components'
import './header.scss'

const Header = () => {
    let location = useLocation().pathname

    let which_header = ''
    switch (location) {
        case '/about':
            which_header = <PageHeaderRight title="About" />
            break
        case '/contact':
            which_header = <PageHeaderRight title="Contact" />
            break
        case '/projects':
            which_header = <PageHeaderRight title="Projects" />
            break
        case '/solutions':
            which_header = <PageHeaderRight title="Solutions" />
            break
        default:
            which_header = <HeaderRight />
            break
    }

    return (
        <header>
            <HeaderMobile />
            <div className="header-desktop">
                <HeaderLeft />
                {which_header}
            </div>
        </header>
    )
}

export default Header
