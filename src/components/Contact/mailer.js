import axios from 'axios'

export const sendEmail = (subject, message) => {
    const MailerURL = 'https://babak-mailer.herokuapp.com/send'
    // const MailerURL = 'http://localhost:5001/send'
    let result = false

    // axios.interceptors.request.use((req) => {
    //     console.log(`${req.method} ${req.url}`)
    //     result = false
    // })

    axios
        .post(MailerURL, {
            api_key: process.env.REACT_APP_MAILER_API_KEY,
            subject: subject,
            message: message,
        })
        .then((response) => {
            result = response.data.success
            // console.log('email response --> >  >', response.data)
            // console.log(response.data.success)
        })
        .catch((error) => {
            if (!error.response) {
                // network error
                //console.log('Error: Network Error')
                //console.log('error1 :', error)
                result = false
            } else {
                //console.log('error2 :', error.response.data.message)
                result = false
            }
        })

    return result
}
