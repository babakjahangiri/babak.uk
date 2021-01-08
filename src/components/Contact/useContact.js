import { useState, useEffect } from 'react'
import useClientInfo from './useClientInfo'
import ReactDOMServer from 'react-dom/server'
import { htmlEmail } from '../../functions/htmlEmail'
import { sendEmail } from './mailer'

const useContact = (validateForm, mapErrorToClasses, submitCallback) => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    })
    const [errors, setErrors] = useState(validateForm(formData))
    const [formClass, setFormClass] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { clientData } = useClientInfo('http://ip-api.com/json')

    ///
    // const { mailerResult } = useMailer(formData, clientData)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
        setFormClass({})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('formDATAAAA', formData)

        const validateErrors = validateForm(formData)
        setErrors(validateErrors)
        const errorClass = mapErrorToClasses(validateErrors)

        //console.log('errorClasses >>>> ', errorClass)

        if (Object.keys(validateErrors).length > 0) {
            setFormClass({ ...errorClass })
            // console.log('OKE', Object.keys(validateErrors))
            //console.log('validate Error :', validateErrors)
        } else {
            const messageBody = ReactDOMServer.renderToStaticMarkup(
                htmlEmail(formData, clientData)
            )

            const rst = sendEmail('Babak.uk contact form', messageBody)
            setIsSubmitting(true)
            console.log('result :', rst)
        }
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            submitCallback()
        }
    })

    return {
        handleChange,
        handleSubmit,
        formData,
        formClass,
    }
}

export default useContact
