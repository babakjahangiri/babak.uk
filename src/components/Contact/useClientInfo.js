/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react'
import axios from 'axios'

const useClientInfo = (url) => {
    // const [isLoading, setLoading] = useState(true)
    const [clientData, setClientData] = useState(null)

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setClientData(response.data)
                //setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [url])

    return {
        clientData,
    }
}

export default useClientInfo
