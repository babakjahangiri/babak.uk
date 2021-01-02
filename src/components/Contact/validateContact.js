export const validateForm = (formInfos) => {
    let errors = {}

    if (formInfos.name.trim().length < 1) {
        errors.name = true
    }

    //honeypot : lastName must be empty
    if (formInfos.lastName.trim().length > 1) {
        errors.lastName = true
    }

    if (formInfos.email.trim().length < 1) {
        errors.email = true
    }

    if (formInfos.message.trim().length < 1) {
        errors.message = true
    }

    return errors
}

export const mapErrorToClasses = (errors) => {
    let formClasses = {}

    if (errors.name === true) {
        formClasses.name = 'error'
    }

    if (errors.email === true) {
        formClasses.email = 'error'
    }

    if (errors.message === true) {
        formClasses.message = 'error'
    }

    return formClasses
}
