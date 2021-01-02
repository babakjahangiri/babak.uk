import React, { useState } from 'react'
import { Header } from './../../components'
import ContactForm from '../../components/Contact/ContactForm'
import ThanksContact from '../../components/Contact/ThanksContact'

import './contact.scss'

const ContactPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    return (
        <React.Fragment>
            <Header />
            {!isSubmitted ? (
                <ContactForm submitForm={() => setIsSubmitted(true)} />
            ) : (
                <ThanksContact />
            )}
        </React.Fragment>
    )
}

export default ContactPage
