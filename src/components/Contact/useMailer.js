import { useEffect, useState } from 'react'
//import ReactDOMServer from 'react-dom/server'
//import { htmlEmail } from '../../functions/htmlEmail'

const useMailer = (formData, clientData) => {
    const [mailerResult, setMailerResult] = useState(null)

    // const messageBody = ReactDOMServer.renderToStaticMarkup(
    //     htmlEmail(formData, clientData)
    // )
    const messageBody = ''
    setMailerResult(messageBody)
    // axios
    //     .post(MailerURL, {
    //         api_key: process.env.REACT_APP_MAILER_API_KEY,
    //         subject: 'Contact form - BABAK.UK',
    //         message: messageBody,
    //     })
    //     .then((response) => {
    //         console.log(response.data.success)
    //     })

    return { mailerResult }
}
export default useMailer
