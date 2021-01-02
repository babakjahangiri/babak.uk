import React from 'react'
import useContact from './useContact'

import { validateForm, mapErrorToClasses } from './validateContact'

export const ContactForm = ({ submitForm }) => {
    const { handleChange, handleSubmit, formData, formClass } = useContact(
        validateForm,
        mapErrorToClasses,
        submitForm
    )

    //  const [submitted, setSubmitted] = useState(false)

    return (
        <React.Fragment>
            <div className="full-section">
                <p>
                    You can easily find me on LinkedIn, the best place where we
                    can in touch with me. For further communication, I prefer
                    telephone conversations or video conferences.
                </p>
                <p>
                    If you have any questions or need additional information,
                    please let me know. Please send your message and your
                    contact info via below contact form easily.
                </p>
            </div>
            <div className="full-section">
                <form className="form-contact" onSubmit={handleSubmit}>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={formClass.name}
                    ></input>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="LastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    ></input>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={formClass.email}
                    ></input>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={formClass.phone}
                    ></input>
                    <textarea
                        id="message"
                        name="message"
                        type="text"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className={formClass.message}
                    ></textarea>
                    <button id="btn-send" type="submit" name="send">
                        SEND
                    </button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default ContactForm
